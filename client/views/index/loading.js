Template.registerHelper('getBody', function () {
  return Session.get('splashLoaded') ? 'login' : 'loading';
});

Template.loading.rendered = function () {
  // launch splash
  this.loading = window.pleaseWait({
    logo: '/images/logo.png',
    backgroundColor: '#e3eef4',
    loadingHtml: spinner
  });

  // manually remove loading for demo
  var loading = this.loading;
  Meteor.setTimeout(function () {
    loading.finish();
    Session.set('splashLoaded', true);
  }, 9000);
};

Template.loading.destroyed = function () {
  this.loading.finish();
};

var spinner = "<div class='uil-default-css' style='transform:scale(0.27);'><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:6px;position:absolute;'></div><div style='top:80px;left:94px;width:12px;height:40px;background:#000000;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:6px;position:absolute;'></div></div>";