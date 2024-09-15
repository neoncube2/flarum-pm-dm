import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import humanTime from 'flarum/common/helpers/humanTime';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import MessageText from './MessageText';
import Stream from 'flarum/common/utils/Stream';
import withAttr from 'flarum/common/utils/withAttr';
import icon from 'flarum/common/helpers/icon';
import app from 'flarum/forum/app';

export default class ConversationView extends Component {
  oninit(vnode) {
    this.newMessageCount = 0;
    this.loading = true;
    this.vnode = vnode;
    this.firstLoad = true;
    this.typingTimeout = true;
    this.isSending = false;
    this.sendTimeout = true;
    this.typing = false;
    this.messageContent = Stream('');
    this.isNew = true;

    const typingTimeoutInterval = () => {
      this.typingTimeout = true;
      setTimeout(() => {
        typingTimeoutInterval();
      }, 5000);
    };

    const typingInterval = () => {
      if (this.typingTime < new Date(Date.now() - 6000)) {
        this.typing = false;
        m.redraw();
      }
      setTimeout(() => {
        typingInterval();
      }, 6000);
    };

    this.sendTimeoutInterval = () => {
      if (this.timer === 0) {
        this.sendTimeout = true;
        m.redraw();
        return;
      }
      this.timer--;
      if (this.timer >= 0) {
        setTimeout(() => {
          this.sendTimeoutInterval();
        }, 1000);
      }
    };

    typingTimeoutInterval();
    typingInterval();

    this.conversation ??= vnode.attrs.conversation;

    this.conversation.recipients().map((recipient) => {
      if (parseInt(recipient.user().id()) !== parseInt(app.session.user.id())) {
        this.user = recipient.user();
        this.recipient = recipient;
      } else {
        this.meRecipient = recipient;
      }
    });
    app.cache.messages ??= [];
    app.cache.messages[this.conversation.id()] ??= [];

    this.getMessages();
  }

  onremove() {
    if (app.pusher) {
      app.pusher.then((object) => {
        const user = object.channels.user;
        user.unbind('typing');
        user.unbind('newMessage');
      });
    }
  }

  onupdate() {
    $('.chat-history').scroll(() => {
      if (this.isNew) {
        const pos = $('.chat-history').scrollTop();
        if (pos === 0) {
          const firstMsg = $('.message-content:first');
          this.getMessages(app.cache.messages[this.conversation.id()].length);

          $('.chat-history').scrollTop(firstMsg.offset().top);
        }
      }
    });
  }

  oncreate() {
    $('.chat-history').animate({ scrollTop: $('.chat-history').prop('scrollHeight') }, 1000);

    if (app.pusher) {
      app.pusher.then((object) => {
        const channels = object.channels;
        channels.user.bind('newMessage', (data) => {
          if (
            parseInt(data.conversationId) === parseInt(this.conversation.id()) &&
            $('.MessagesDropdown').children('.Dropdown-menu').is(':visible')
          ) {
            const message = {
              id: Stream(data.id),
              message: Stream(data.message),
              user: Stream(this.user),
              createdAt: Stream(data.createdAt),
            };
            this.decryptMessages([message]);
            this.newMessageCount++;
            this.typing = false;
            m.redraw();
            $('.chat-history').animate({ scrollTop: $('.chat-history').prop('scrollHeight') }, 1000);
          }
        });

        channels.user.bind('typing', (data) => {
          if (parseInt(data.conversationId) === parseInt(this.conversation.id())) {
            const list = $('.chat-history');

            const scrollMore = list.scrollTop() + list.innerHeight() >= list[0].scrollHeight - 50;

            this.typing = true;
            this.typingTime = new Date();
            m.redraw();

            if (scrollMore) {
              list.animate({ scrollTop: $('.chat-history').prop('scrollHeight') }, 400);
            }
          }
        });

        channels.user.bind('readMessage', (data) => {
          if (parseInt(data.conversationId) === parseInt(this.conversation.id())) {
            this.recipient.lastRead = Stream(data.number);
            m.redraw();
          }
        });
      });
    }
  }

  view(vnode) {
    const messages = app.cache.messages[this.conversation.id()];

    return (
      <div className="chat">
        <div className="chat-header clearfix">
          {avatar(this.user)}

          <div className="chat-about">
            <div className="chat-with">
              {app.translator.trans('neoncube-private-messages.forum.chat.chat_with', { username: username(this.user) })}
            </div>
            <div className="chat-num-messages">
              {app.translator.trans(
                'neoncube-private-messages.forum.chat.messages_' + (parseInt(this.conversation.totalMessages()) > 1 ? 'multiple' : 'single'),
                { count: this.conversation.totalMessages() + this.newMessageCount }
              )}
            </div>
          </div>
        </div>

        {messages?.length > 0 && !this.loading ? (
          [
            <div className="chat-history">
              <ul>
                {!this.isNew ? (
                  <li className="startConvo">{app.translator.trans('neoncube-private-messages.forum.chat.start_of_conversation')}</li>
                ) : (
                  ''
                )}
                {messages
                  ? messages
                    // .filter((message, index, self) => index === self.findIndex(t => t.message() === message.message()))
                    .sort((a, b) => a.createdAt() - b.createdAt())
                    .map((message, i) => {
                      const myMessage = parseInt(message.user().id()) === parseInt(app.session.user.id());
                      return (
                        <li className="clearfix message-content">
                          <div className={'message-data ' + (myMessage ? 'align-right' : '')}>
                            <div className={'avatar-inline ' + (myMessage ? 'me' : 'other')}>
                              {avatar(myMessage ? app.session.user : message.user())}
                            </div>
                            <span className="message-data-name">{username(myMessage ? app.session.user : message.user())}</span>
                            <span className="message-data-time">{humanTime(message.createdAt())}</span>
                          </div>
                          <MessageText
                            content={message.message()}
                            className={'message ' + (myMessage ? 'my-message float-right' : 'other-message')}
                          />
                          {myMessage ? (
                            parseInt(this.recipient.lastRead()) >= parseInt(message.data.attributes.number) ? (
                              <span className="message-read">{icon('fas fa-check')}</span>
                            ) : (
                              ''
                            )
                          ) : (
                            ''
                          )}
                        </li>
                      );
                    })
                  : ''}
                {this.messageContent() ? (
                  <li>
                    <MessageText content={this.messageContent()} className={'message my-message float-right message-preview'} preview={true} />
                  </li>
                ) : (
                  ''
                )}
                {this.typing ? (
                  <li>
                    <div className="tiblock">
                      <div className="tidot"></div>
                      <div className="tidot"></div>
                      <div className="tidot"></div>
                    </div>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </div>,
          ]
        ) : (
          <LoadingIndicator display="block" size="medium" />
        )}

        <form className="chat-message clearfix">
          <textarea
            id="MessageTextArea"
            value={this.messageContent()}
            oninput={withAttr('value', this.typingPush.bind(this))}
            placeholder={app.translator.trans('neoncube-private-messages.forum.chat.text_placeholder')}
            rows="3"
            disabled={this.isSending && !this.sendTimeout}
            onkeydown={e => {
              if (e.keyCode === 13 && app.forum.attribute('neoncubePrivateMessagesReturnKey')) {
                this.sendMessage();
              }
            }} />

          <Button onclick={this.sendMessage.bind(this)} className="Button Button--primary" disabled={!this.messageContent() || !this.sendTimeout}>
            {app.translator.trans('neoncube-private-messages.forum.chat.send')}
          </Button>
        </form>
      </div>
    );
  }

  typingPush(value) {
    this.messageContent(value);
    m.redraw();
    if (this.typingTimeout) {
      app
        .request({
          method: 'POST',
          url: app.forum.attribute('apiUrl') + '/neoncube-private-messages/messages/typing',
          body: {
            conversationId: this.conversation.id(),
            userId: this.user.id(),
          },
        })
        .then(() => {
          this.typingTimeout = false;
        });
    }
  }

  sendMessage() {
    if (!this.sendTimeout || this.messageContent() === '' || !this.messageContent().replace(/\s/g, '').length) return;

    this.isSending = true;
    this.sendTimeout = false;
    this.timer = 1;
    this.sendTimeoutInterval();
    this.newMessageCount++;

    app.store
      .createRecord('messages')
      .save({
        messageContents: this.messageContent(),
        conversationId: this.conversation.id(),
      })
      .then((message) => {
        app.cache.messages[this.conversation.id()].push(message);
        m.redraw();
        this.messageContent('');
        this.isSending = false;
        $('.chat-history').animate({ scrollTop: $('.chat-history').prop('scrollHeight') }, 500);

        // TODO: Can this be done when the message is created?
        app.request({
          method: 'POST',
          url: app.forum.attribute('apiUrl') + '/neoncube-private-messages/messages/read',
          body: {
            conversationId: this.conversation.id(),
            messageId: message.id(),
          },
        });
      });
  }

  getMessages(offset = 0) {
    if (!this.isNew) return;

    app.store
      .find('neoncube-private-messages/messages', this.conversation.id(), { offset })
      .then((results) => {
        delete results.payload;

        if (this.firstLoad) {
          const oldNumber = this.meRecipient.lastRead();
          app
            .request({
              method: 'POST',
              url: app.forum.attribute('apiUrl') + '/neoncube-private-messages/messages/read',
              body: {
                conversationId: this.conversation.id(),
                messageId: results[0].id(),
              },
            })
            .then((response) => {
              const newNumber = response.data.attributes.lastRead;
              const lastUnreadMessage = app.session.user.unreadMessages();

              const unreadMessages = lastUnreadMessage === 0 ? 0 : lastUnreadMessage - (newNumber - oldNumber);

              if (unreadMessages >= 0) {
                app.session.user.pushAttributes({
                  unreadMessages,
                });
              }

              this.firstLoad = false;

              m.redraw();
            });
        }

        app.cache.messages[this.conversation.id()].push(...results);

        if (results.length < 20) {
          this.isNew = false;
        }

        this.loading = false;
        m.redraw();
      });
  }
}
