import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import ConversationsDropdown from './components/ConversationsDropdown';

export default function () {
  extend(HeaderSecondary.prototype, 'items', function (items) {
    // TODO: It used to be that the conversations icon was also shown if the user had any conversations, but I've commented this out,
    // because it wasn't working, at least for me.
    // I think a better approach would be to load a count of how many conversations a user has, instead of actually loading all conversations
    // whenever loading a user.
    if (app.forum.attribute('canMessage')/* || (app.session.user && app.session.user.conversations().length)*/) {
      items.add('Messages', <ConversationsDropdown />, 20);
    }
  });
}
