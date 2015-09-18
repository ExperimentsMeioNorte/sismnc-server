// Rota Principal
HomeController = ApplicationController.extend();

Router.route('/', {
  name: 'home',
  yieldRegions: {
    'header': {to: 'header'},
    'navigation': {to: 'navigation'}
  },
  fastRender: true
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