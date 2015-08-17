Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {

  this.layout('ApplicationLayout');
  this.render('header', {to: 'header'});
  this.render('footer', {to: 'footer'});

});
