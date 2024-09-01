import Page from 'flarum/common/components/Page';

import ConversationView from './ConversationView';

export default class ConversationViewPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    const idParam = m.route.param('id');

    app.store
      .find('neoncube-private-messages/conversations', idParam)
      .then((conversation) => {
        app.cache.conversations = [conversation];
        this.list = ConversationView.component({ conversation });
        m.redraw();
      });

    this.bodyClass = 'App--messages';
  }

  view(vnode) {
    return (
      <div className="MessagesPage">
        <div className="ConversationsList">
          <div className="container clearfix">{this.list ? this.list : null}</div>
        </div>
      </div>
    );
  }
}
