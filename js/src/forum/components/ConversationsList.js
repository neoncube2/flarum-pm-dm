import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import Link from 'flarum/common/components/Link';
import Component from 'flarum/common/Component';
import ConversationView from './ConversationView';
import UserListItem from './UserListItem';
import StartConversationModal from './StartConversationModal';
import UserListItemContent from './UserListItemContent';

export default class ConversationsList extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.loading = true;
    this.currentConversationId = vnode.attrs.currentConversationId;

    app.cache.conversations ??= [];

    app.store
      .find('neoncube-private-messages/conversations')
      .then((results) => {
        delete results.payload;
        app.cache.conversations = results;

        this.loading = false;

        m.redraw()
      })
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    const list = $('.ConversationsList-list');

    list.off('scroll').on('scroll', () => {
      if (list.scrollTop() + list.innerHeight() >= list[0].scrollHeight) {
        this.loadMore();
      }
    });
  }

  view(vnode) {
    const conversations = app.cache.conversations;

    const currentConversation = conversations?.find(conversation => conversation.data.id === this.currentConversationId);

    // This used to use app.session.user.conversations(). Not sure this makes sense, or if it makes sense to reload when opening the conversations dropdown?
    const hasConversations = conversations?.length > 0;

    return (
      <div style={hasConversations ? '' : 'width: unset; padding: 10px;'} className="ConversationsList">
        <div className="people-list" id="people-list">
          <Button onclick={() => this.showModal()} className="Button Button--primary" disabled={!app.forum.attribute('canMessage')}>
            {app.forum.attribute('canMessage')
              ? app.translator.trans('neoncube-private-messages.forum.chat.start')
              : app.translator.trans('neoncube-private-messages.forum.chat.cant_start')}
          </Button>
          {
            hasConversations &&
            <div className="ConversationsList-list mobile">
              {
                conversations.map(conversation => {
                  return (
                    <Link className="UserListItem" href={(app.route('messages', { id: conversation.data.id }))}>
                      <UserListItemContent conversation={conversation} />
                    </Link>
                  );
                })
              }
            </div>
          }

          {
            hasConversations &&
            <div className="ConversationsList-list desktop">
              {
                conversations.map(conversation => {
                  return (
                    <UserListItem
                      conversation={conversation}
                      active={currentConversation === conversation}
                      onclick={(e) => this.currentConversationId = conversation.data.id}
                    />
                  );
                })
              }
            </div>
          }
        </div>

        {
          currentConversation &&
          [<ConversationView key={currentConversation.id()} conversation={currentConversation} />]
        }
      </div>
    );
  }

  showModal() {
    app.modal.show(StartConversationModal, {
      conversations: app.cache.conversations,
      messages: app.cache.messages,
    });
  }

  async loadMore() {
    this.loading = true;

    app.store
      .find('neoncube-private-messages/conversations', { offset: app.cache.conversations.length })
      .then((results) => {
        delete results.payload;
        results.map((result) => {
          app.cache.conversations.push(result);
        });

        this.loading = false;

        m.redraw();
      });
  }
}
