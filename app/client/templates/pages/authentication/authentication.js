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

//var loginButtonsSession = Accounts._loginButtonsSession;
Template.authentication.events({
    // executa o login da rede social facebook
    'click .bg-facebook': function (evento, tmp) {
        evento.preventDefault();

        // acessa o methodo das configuracoes para efetuar o login de uma determinada rede social
        Meteor.loginApp(evento);

        // atributos montados a partir do methodo loginApp, como as opcoes e qual servidor de login é para executar
        Meteor.loginAppService(Meteor.loginAppOptions, function(err){
          if (err){
            toastr.warning(
              "Opaa, Login ou senha inválido.",
              '',
              {
                  "progressBar": true,
                  "newestOnTop": true,
                  "showDuration": "100",
                  "hideDuration": "100",
                  "timeOut": "1000"
              }
            );
          }else{
            Router.go('home');
          }
        });
    },

    // desloga na rede social atual
    'click .logout-bg-facebook': function(evento, tmp){
        evento.preventDefault();
        Meteor.logout();
    }
});