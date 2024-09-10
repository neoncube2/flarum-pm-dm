import Notification from 'flarum/forum/components/Notification';

export default class NewPrivateMessageNotification extends Notification {
  icon() {
    return 'fas fa-message';
  }

  href() {
    const notification = this.attrs.notification;

    const message = notification.subject();

    return app.route('messages', { id: message.data.attributes.conversationId }/*, message.number*/);
  }

  content() {
    const fromUser = this.attrs.notification.fromUser();

    // // From https://github.com/flarum/framework/blob/main/framework/core/js/src/common/helpers/username.tsx#L9
    // // The Flarum username() function expects displayName() to be a function, and it outputs a <span>, which I don't think is what we want.
    const username = (fromUser && fromUser.data.attributes.displayName) || app.translator.trans('core.lib.username.deleted_text');

    return app.translator.trans('neoncube-private-messages.forum.notifications.web.new_private_message.body', { 'fromUser': username });
  }
}
