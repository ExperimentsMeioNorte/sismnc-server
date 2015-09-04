// Rota Boa FM
Router.route('/boafm', function(){

  this.layout('ApplicationLayout');
  this.render('boafm');
  this.render('headerBOAFM', {to: 'header'});

}, {
  name: 'boafm'
});