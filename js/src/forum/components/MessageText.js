import Component from 'flarum/common/Component';

export default class MessageText extends Component {
  static initAttrs(attrs) {
    attrs.className ??= '';
    attrs.content ??= '';
    attrs.preview ??= false;
  }

  view(vnode) {
    return <div className={this.attrs.className} />;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    if (this.attrs.preview) {
      let preview;
      const updatePreview = () => {
        const content = this.attrs.content;

        if (preview === content) return;

        preview = content;

        s9e.TextFormatter.preview(content || '', vnode.dom);
      };
      updatePreview();

      this.updateInterval = setInterval(updatePreview, 50);
    } else {
      s9e.TextFormatter.preview(this.attrs.content, vnode.dom);
    }
  }

  onremove() {
    clearInterval(this.updateInterval);
  }
}
