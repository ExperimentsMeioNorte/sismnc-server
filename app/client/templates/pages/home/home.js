// Rota Principal
HomeController = ApplicationController.extend();

Router.route('/', {
  name: 'home',
  yieldRegions: {
    'header': {to: 'header'},
    'navigation': {to: 'navigation'}
  },
  waitOn: function() {
    Meteor.remote.subscribe('user');
  },
  data: function(){
    return User.find({_id:Meteor.remote.userId()});
  }
});



// Ao Entrar
Template.home.onRendered(function(){

  console.log(Router.current().data());
  console.log(Router.current().data()['name']);

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true
    }
  );

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


// Ao Sair
Template.home.onDestroyed(function(){

  $('#modal-about, #modal-edit-profile, #modal-error-report').closeModal();

});
