import app from 'flarum/admin/app';

app.initializers.add('littlecxm-whisper', () => {
  app.extensionData
    .for('littlecxm-whisper')
    .registerSetting({
      setting: 'littlecxm-whisper.return_key',
      type: 'bool',
      label: app.translator.trans('littlecxm-whisper.admin.settings.return_key'),
    })
    .registerPermission(
      {
        icon: 'fas fa-user-lock',
        label: app.translator.trans('littlecxm-whisper.admin.permissions.start_label'),
        permission: 'startConversation',
      },
      'start'
    );
});
