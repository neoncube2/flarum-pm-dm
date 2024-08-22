import app from 'flarum/admin/app';

app.initializers.add('private-messages', () => {
  app.extensionData
    .for('private-messages')
    .registerSetting({
      setting: 'private-messages.return_key',
      type: 'bool',
      label: app.translator.trans('private-messages.admin.settings.return_key'),
    })
    .registerPermission(
      {
        icon: 'fas fa-user-lock',
        label: app.translator.trans('private-messages.admin.permissions.start_label'),
        permission: 'startConversation',
      },
      'start'
    );
});
