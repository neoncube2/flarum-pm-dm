import app from 'flarum/admin/app';

app.initializers.add('neoncube-private-messages', () => {
  app.extensionData
    .for('neoncube-private-messages')
    .registerSetting({
      setting: 'neoncube-private-messages.return_key',
      type: 'bool',
      label: app.translator.trans('neoncube-private-messages.admin.settings.return_key'),
    })
    .registerPermission(
      {
        icon: 'fas fa-user-lock',
        label: app.translator.trans('neoncube-private-messages.admin.permissions.start_label'),
        permission: 'startConversation',
      },
      'start'
    );
});
