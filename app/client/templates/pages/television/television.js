// Rota Rede Meio Norte
Router.route('/rede-meionorte', function(){

  this.layout('ApplicationLayout');
  this.render('television');
  this.render('headerTelevision', {to: 'header'});
  this.render('navigationTelevision', {to: 'navigation'});

  fastRender: true

}, {
  name: 'television'
});