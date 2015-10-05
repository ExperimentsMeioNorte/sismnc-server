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
  onBeforeAction: function(){
    Router.go('home');
     this.next();
  }
});

// Ao Entrar
Template.home.onRendered(function(){

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

Template.home.helpers({
  // gera os dados do programa atual
  userData: function(){
    return User.find(
      {
        _id: Meteor.remote.userId(),
        status: 1
      }
    ).map(
      function(u) {
        return {
          _id: u._id,
          name: u.name,
          avatar: u.avatar,
          email: u.email
        };
      }
    );
  }
});
