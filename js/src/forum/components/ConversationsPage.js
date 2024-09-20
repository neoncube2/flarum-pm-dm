import Page from 'flarum/common/components/Page';

import ConversationsList from './ConversationsList';

export default class ConversationsPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    this.currentConversationId = m.route.param('id');

    this.bodyClass = 'App--conversations';
  }

  view(vnode) {
    return (
      <div className={this.currentConversationId != null ? 'ConversationsPage viewing-conversation' : 'ConversationsPage'}>
        <ConversationsList currentConversationId={this.currentConversationId} />
      </div>
    );
  }
}
