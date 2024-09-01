import Page from 'flarum/common/components/Page';

import ConversationView from './ConversationView';

export default class ConversationViewPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    const idParam = m.route.param('id');

    app.store
      .find('neoncube-private-messages/conversations', idParam)
      .then((conversation) => {
        this.conversation = conversation;

        app.cache.conversations = [conversation];

        m.redraw();
      });

    this.bodyClass = 'App--messages';
  }

  view(vnode) {
    return (
      <div className="MessagesPage">
        <div className="ConversationsList">
          <div className="container clearfix">{
            this.conversation ? <ConversationView conversation={this.conversation} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
