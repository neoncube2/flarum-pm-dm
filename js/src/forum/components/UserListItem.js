import Component from 'flarum/common/Component';
import app from 'flarum/forum/app';
import UserListItemContent from './UserListItemContent';

export default class UserListItem extends Component {
  oninit(vnode) {
    this.conversation = vnode.attrs.conversation;

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
    return (
      <div className={vnode.attrs.active ? 'UserListItem active' : 'UserListItem'} onclick={vnode.attrs.onclick}>
        <UserListItemContent conversation={this.conversation} typing={this.typing} />
      </div>
    );
  }
}
