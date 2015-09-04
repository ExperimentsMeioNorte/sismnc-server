// Rota FM Meio norte
Router.route('/fmmeionorte', function(){

  this.layout('ApplicationLayout');
  this.render('fmmn');
  this.render('headerFMMN', {to: 'header'});

}, {
  name: 'fmmn'
});