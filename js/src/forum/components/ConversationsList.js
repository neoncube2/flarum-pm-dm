import Button from 'flarum/common/components/Button';
import Component from 'flarum/common/Component';
import ConversationView from './ConversationView';
import UserListItem from './UserListItem';
import StartConversationModal from './StartConversationModal';
import app from 'flarum/forum/app';

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
          {hasConversations && (
            <ul className="ConversationsList-list">
              {Array.isArray(conversations) &&
                conversations.map(conversation => {
                  return (
                    <UserListItem
                      conversation={conversation}
                      active={currentConversation === conversation}
                      onclick={(e) => {
                        if (false/*isMobile*/) {
                          // TODO: It might be nice to have real links shown if the screen is too small.
                          window.location.assign(app.route('messages', { id: app.cache.conversations[$(e.currentTarget).attr('id')].id() }));
                        } else {
                          this.currentConversationId = conversation.data.id;
                        }
                      }}
                    />
                  );
                })}
            </ul>
          )}
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
