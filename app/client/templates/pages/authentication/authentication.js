// Rota Autenticação
AuthController = ApplicationController.extend();

Router.route('/auth', {
  fastRender: true,
  name: 'authentication',
  waitOn: function() {
    Meteor.remote.subscribe('user');
    Meteor.subscribe('users');
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
          console.log('Não deu certo, tenta novamente mais tarde');
        }else{
          var usersSearch = Meteor.users.findOne({_id:Meteor.userId()});
          var userId = User.findOne(
              {
                facebook_id:usersSearch.services.facebook.id,
                email:usersSearch.services.facebook.email
              }
          );

          if(userId !== undefined){
            if(userId.status === 0){
              console.log('Sem autorizacão');
            }else{
              Meteor.remote.setUserId(userId._id);
              Router.go('home');
            }
          }else{
            Meteor.remote.call(
                'insertUser',
                [
                  111,
                  '0',
                  usersSearch.services.facebook.name,
                  'http://graph.facebook.com/' + usersSearch.services.facebook.id + '/picture/?type=large',
                  usersSearch.services.facebook.email,
                  null,
                  usersSearch.services.facebook.id,
                  null,
                  1
                ],
                function(error, result){
                  if(error){
                    console.log('Algo deu errado');
                  }else{
                    console.log('Ae deu certo');
                    var userId = User.findOne(
                      {
                        facebook_id:usersSearch.services.facebook.id,
                        email:usersSearch.services.facebook.email
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
    'click .bg-google': function (evento, tmp) {
      evento.preventDefault();

      // acessa o methodo das configuracoes para efetuar o login de uma determinada rede social
      Meteor.loginApp(evento);

      // atributos montados a partir do methodo loginApp, como as opcoes e qual servidor de login é para executar
      Meteor.loginAppService(Meteor.loginAppOptions, function(err){
        if (err){
          console.log('Não deu certo, tenta novamente mais tarde');
        }else{
          var usersSearch = Meteor.users.findOne({_id:Meteor.userId()});
          var userId = User.findOne(
              {
                google_id:usersSearch.services.google.id,
                email:usersSearch.services.google.email
              }
          );

          if(userId !== undefined){
            if(userId.status === 0){
              console.log('Sem autorizacão');
            }else{
              Meteor.remote.setUserId(userId._id);
              Router.go('home');
            }
          }else{
            Meteor.remote.call(
                'insertUser',
                [
                  111,
                  '0',
                  usersSearch.services.google.name,
                  usersSearch.services.google.picture,
                  usersSearch.services.google.email,
                  null,
                  null,
                  usersSearch.services.google.id,
                  1
                ],
                function(error, result){
                  if(error){
                    console.log('Algo deu errado');
                  }else{
                    console.log('Ae deu certo');
                    var userId = User.findOne(
                      {
                        google_id:usersSearch.services.google.id,
                        email:usersSearch.services.google.email
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
    }
});
