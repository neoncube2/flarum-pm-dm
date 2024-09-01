import Page from 'flarum/common/components/Page';

import ConversationsList from './ConversationsList';

export default class ConversationsPage extends Page {
  view(vnode) {
    return (
      <div className="ConversationsPage">
        <ConversationsList mobile={true}></ConversationsList>
      </div>
    );
  }
}
