import Page from 'flarum/common/components/Page';

import ConversationView from './ConversationView';

export default class ConversationViewPage extends Page {
  init() {
    super.init();

    app.history.push('conversations');

    const idParam = m.route.param('id');

    app.store.find('private-messages/conversations', idParam).then((conversation) => {
      app.cache.conversations = [conversation];
      this.list = ConversationView.component({ conversation, mobile: true });
      m.redraw();
    });

    this.bodyClass = 'App--messages';
  }

  view() {
    return (
      <div className="MessagesPage">
        <div className="ConversationsList">
          <div className="container clearfix">{this.list ? this.list : null}</div>
        </div>
      </div>
    );
  }
}
