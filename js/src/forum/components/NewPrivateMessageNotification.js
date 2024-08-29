import Notification from 'flarum/forum/components/Notification';
// import username from 'flarum/common/helpers/username';

export default class NewPrivateMessageNotification extends Notification {
  icon() {
    return 'fas fa-message';
  }

  href() {
    const notification = this.attrs.notification;
    const discussion = notification.subject();
    const content = notification.content() ?? {};

    return app.route.discussion(discussion, content.postNumber);
  }

  content() {
    return app.translator.trans('neoncube-private-messages.forum.notifications.new_private_message', { user: this.attrs.notification.fromUser() });
  }
}
