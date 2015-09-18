// Rota Autenticação
AuthController = ApplicationController.extend();

Router.route('/auth', {
  name: 'authentication',
  fastRender: true
  waitOn: function() {
    Meteor.remote.subscribe('user');
  }
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
            var usersSearch = Meteor.users.findOne({_id:Meteor.userId()});
            var userId = User.findOne(
                {
                  facebook_id:Meteor.userId(),
                  email:usersSearch.services.facebook.email
                }
            );

            if(userId !== undefined){
              Meteor.remote.setUserId(userId._id);
              Router.go('home');
            }else{
              Meteor.remote.call(
                  'insertUser',
                  [
                    111,
                    0,
                    usersSearch.services.facebook.name,
                    usersSearch.services.facebook.picture,
                    usersSearch.services.facebook.email,
                    null,
                    Meteor.userId(),
                    null,
                    1
                  ],
                  function(error, result){
                    if(error){
                      toastr.warning(
                        "Ops, algo deu errado, descupe o transtorno.",
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
                      toastr.success(
                        "Aê, Seja bem vindo(a).",
                        '',
                        {
                          "progressBar": true,
                          "newestOnTop": true,
                          "showDuration": "100",
                          "hideDuration": "100",
                          "timeOut": "1000"
                        }
                      );

                      var userId = User.findOne(
                        {
                          facebook_id:Meteor.userId()
                        }
                      );

                      Meteor.remote.setUserId(userId._id);
                      Router.go('home');
                    }
                  }
              );
            }
          }
        });
    },

    // desloga na rede social atual
    'click .logout-bg-facebook': function(evento, tmp){
        evento.preventDefault();
        Meteor.logout();
    }
});