App.info({
  name: 'SISMNC',
  description: 'Aplicativo Interativo Sistema Meio Norte de Comunicação',
  version: '0.0.1'
});

/*App.icons({
  'android_ldpi': 'resources/icons/icon-ldpi.png',
  'android_mdpi': 'resources/icons/icon-mdpi.png',
  'android_hdpi': 'resources/icons/icon-hdpi.png',
  'android_xhdpi': 'resources/icons/icon-xhdpi.png'
});*/

App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

// cordova
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '638977909535835',
    APP_NAME: 'vtv'
});

App.accessRule("*://enginex.kadira.io/simplentp/sync");
//App.accessRule("rtsp://212-133.livestream.com:8080/livestreamiphone/3332377_2958396_819a9a89_1_198@197839");
//App.accessRule("*://new.livestream.com/accounts/3332377/events/2958396");
