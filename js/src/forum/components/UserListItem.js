import Component from 'flarum/common/Component';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import userOnline from 'flarum/common/helpers/userOnline';
import app from 'flarum/forum/app';

export default class UserListItem extends Component {
  oninit(vnode) {
    this.conversation = vnode.attrs.conversation;
    this.user = null;

    const userId = parseInt(app.session.user.id());

    this.user = this.conversation
      .recipients()
      .find((recipient) => parseInt(recipient.user().id()) !== userId)
      ?.user();
    m.redraw();

    const typingInterval = () => {
      if (this.typingTime < new Date(Date.now() - 6000)) {
        this.typing = false;
        m.redraw();
      }
      setTimeout(() => {
        typingInterval();
      }, 6000);
    };

    typingInterval();

    super.oncreate(vnode);
  }

  onremove(vnode) {
    if (app.pusher) {
      app.pusher.then((object) => {
        object.channels.user.unbind('typing');
      });
    }

    super.onremove(vnode);
  }

  oncreate(vnode) {
    if (app.pusher) {
      app.pusher.then((object) => {
        const channels = object.channels;
        channels.user.bind('typing', (data) => {
          if (parseInt(data.conversationId) === parseInt(this.conversation.id())) {
            this.typing = true;
            this.typingTime = new Date();
            m.redraw();
          }
        });
      });
    }

    super.oncreate(vnode);
  }

  view(vnode) {
    if (!this.user) return null;

    return (
      <li id={vnode.attrs.index} className={vnode.attrs.active ? 'UserListItem active' : 'UserListItem'} onclick={vnode.attrs.onclick}>
        <div className="UserListItem-content">
          {avatar(this.user)}
          <div className="info">
            {username(this.user)}
            {userOnline(this.user)}
          </div>
          {this.typing && (
            <div className="tiblock">
              <div className="tidot"></div>
            </div>
          )}
        </div>
      </li>
    );
  }
}
