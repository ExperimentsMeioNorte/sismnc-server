// Rota Rede Meio Norte
TelevisionController = ApplicationController.extend();

Router.route('/rede-meionorte', {
  name: 'television',
  yieldRegions: {
    'headerTelevision': {to: 'header'},
    'navigationTelevision': {to: 'navigation'}
  },
  fastRender: true
});

// Ao Entrar
Template.television.onRendered(function(){

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
Template.television.onDestroyed(function(){

  // $('#modal-about, #modal-edit-profile, #modal-error-report').closeModal();
  document.querySelector('body').classList.remove('show-message');
  $('ul.tabsTV').tabs();

});