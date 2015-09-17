// Rota Autenticação
AuthController = ApplicationController.extend();

Router.route('/auth', {
  name: 'authentication',
  fastRender: true
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

// capitalize = function(str){
//     str = (str === null)? '' : String(str);
//     return str.charAt(0).toUpperCase() + str.slice(1);
// };

// var loginButtonsSession = Accounts._loginButtonsSession;
// Template.authentication.events({
//     'click .login-button': function (evt, tmp) {
//         evt.preventDefault();
//         var serviceName = $(evt.currentTarget).attr('data-service');
//         //mixpanel.track("loginclicked");
//         //close(evt, tmp);
//         var callback = function (err) {
//             if (!err) {
//                 //alert("loginsucceed");
//                 //close(evt, tmp);
//             } else if (err instanceof Accounts.LoginCancelledError) {
//                 // do nothing
//                 // alert("logincancelled");
//                 //open(evt, tmp);
//             } else if (err instanceof ServiceConfiguration.ConfigError) {
//                 //loginButtonsSession.configureService(serviceName);
//                 //alert("configureService");
//                 //open(evt, tmp);
//             } else {
//                 //alert("loginerror", err.reason);
//                 console.log(err.reason || "Unknown error");
//                 //open(evt, tmp);
//             }
//         };
//         // XXX Service providers should be able to specify their
//         // `Meteor.loginWithX` method name.
//         var loginWithService = Meteor["loginWith" + ((serviceName === 'meteor-developer')? 'MeteorDeveloperAccount' : capitalize(serviceName))];

//         var options = {}; // use default scope unless specified
//         if (Accounts.ui._options.requestPermissions[serviceName]){
//             options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
//         }

//         if (Accounts.ui._options.requestOfflineToken[serviceName]){
//             options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
//         }

//         loginWithService(options, function(err){
//           if (err){
//             // The user might not have been found, or their passwword
//             // could be incorrect. Inform the user that their
//             // login attempt has failed.
//           }else{
//             Router.go('home');
//           }
//         });

//         // console.log('fake login');
//         // Router.go('weeklyGames');
//     },
//     'click .logout-button': function(evt, tmp){
//         evt.preventDefault();
//         Meteor.logout();
//     }
// });