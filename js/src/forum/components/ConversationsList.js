import Button from 'flarum/common/components/Button';
import Component from 'flarum/common/Component';
import ConversationView from './ConversationView';
import UserListItem from './UserListItem';
import StartConversationModal from './StartConversationModal';
import app from 'flarum/forum/app';

export default class ConversationsList extends Component {
  oninit(vnode) {
    this.mobile = vnode.attrs.mobile;
    this.load();
    this.loading = false;
  }

  onupdate() { }

  onbeforeupdate() {
    const list = $('.ConversationsList-list');

    list.off('scroll').on('scroll', () => {
      if (list.scrollTop() + list.innerHeight() >= list[0].scrollHeight) {
        this.loadMore();
      }
    });
  }

  view() {
    if (this.loading) return;

    const conversations = app.cache.conversations;

    if (this.currentConversation === null && conversations?.length > 0) {
      this.currentConversation = conversations[0];
    }

    if (this.currentConversation) {
      this.conversationComponent = ConversationView.component({ conversation: this.currentConversation, mobile: this.mobile });
    }

    const hasConversations = conversations?.length > 0;

    const redrawConversationsList = () => m.redraw();

    return (
      <div className="ConversationsList">
        <div style={hasConversations ? '' : 'width: unset; padding: 10px;'} className="container clearfix">
          <div style={this.mobile ? 'float: unset; margin: 0 auto; display: block;' : ''} className="people-list" id="people-list">
            {Button.component(
              {
                onclick: this.showModal.bind(this),
                className: 'Button Button--primary',
                disabled: !app.forum.attribute('canMessage'),
              },
              app.forum.attribute('canMessage')
                ? app.translator.trans('neoncube-private-messages.forum.chat.start')
                : app.translator.trans('neoncube-private-messages.forum.chat.cant_start')
            )}
            {hasConversations && (
              <ul className="ConversationsList-list">
                {Array.isArray(conversations) &&
                  conversations.map((conversation, index) => {
                    return (
                      <UserListItem
                        conversation={conversation}
                        index={index}
                        active={this.mobile ? false : this.currentConversation === conversation}
                        onclick={(e) => {
                          if (this.mobile) {
                            m.route(app.route('messages', { id: app.cache.conversations[$(e.currentTarget).attr('id')].id() }));
                          } else {
                            this.currentConversation = app.cache.conversations[$(e.currentTarget).attr('id')];

                            redrawConversationsList();
                          }
                        }}
                      />
                    );
                  })}
              </ul>
            )}
          </div>

          {!this.mobile && this.conversationComponent}
        </div>
      </div>
    );
  }

  showModal() {
    app.modal.show(StartConversationModal, {
      conversations: app.cache.conversations,
      messages: app.cache.messages,
    });
  }

  loadMore() {
    this.loading = true;
    m.redraw();

    app.store
      .find('neoncube-private-messages/conversations', { offset: app.cache.conversations.length })
      .then((results) => {
        delete results.payload;
        results.map((result) => {
          app.cache.conversations.push(result);
        });
      })
      .catch(() => { })
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }

  load() {
    if (app.cache.conversations && !this.mobile) {
      return;
    }

    if (this.mobile) {
      app.cache.conversations = [];
    }

    this.loading = true;
    m.redraw();

    app.store
      .find('neoncube-private-messages/conversations')
      .then((results) => {
        delete results.payload;
        app.cache.conversations = results;
      })
      .catch(() => { })
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
