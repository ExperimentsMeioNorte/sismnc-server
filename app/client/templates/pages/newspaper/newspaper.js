// Rota Jornal
Router.route('/jornal-meionorte', function(){

  this.layout('ApplicationLayout');
  this.render('newspaper');
  this.render('headerNewspaper', {to: 'header'});

}, {
  name: 'newspaper'
});