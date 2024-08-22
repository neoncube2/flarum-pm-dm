import Notification from 'flarum/forum/components/Notification';
// import username from 'flarum/common/helpers/username';

export default class PrivateMessageReceivedNotification extends Notification {
  icon() {
    return 'fas fa-message';
  }

  href() {
    const notification = this.attrs.notification;
    const discussion = notification.subject();
    const content = notification.content() || {};

    return app.route.discussion(discussion, content.postNumber);
  }

  content() {
    return app.translator.trans('private-messages.forum.notifications.message_received', { user: this.attrs.notification.fromUser() });
  }
}
