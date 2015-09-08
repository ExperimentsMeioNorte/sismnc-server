// Rota Autenticação
Router.route('/auth', function(){

  this.layout('ApplicationLayout');
  this.render('authentication');

}, {
  name: 'auth'
});

// Ao Entrar
Template.authentication.onRendered(function(){

  $('.modal-trigger').leanModal({
      dismissible: true,
      opacity:1,
      in_duration: 300,
      out_duration: 200,
      ready: function() {

      },
      complete: function() {

      }
  });

});