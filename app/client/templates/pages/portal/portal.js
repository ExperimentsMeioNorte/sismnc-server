// Rota Portal
Router.route('/portal-meionorte', function(){

  this.layout('ApplicationLayout');
  this.render('portal');
  this.render('headerPortal', {to: 'header'});

}, {
  name: 'portal'
});