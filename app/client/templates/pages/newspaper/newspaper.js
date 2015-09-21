// Rota Jornal
NewspaperController = ApplicationController.extend();

Router.route('/jornal-meionorte', {
  name: 'newspaper',
  yieldRegions: {
    'headerNewspaper': {to: 'header'},
    'navigationNewspaper': {to: 'navigation'}
  },
  fastRender: true
});

// Ao Entrar
Template.newspaper.onRendered(function(){

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true
    }
  );

  $('ul.tabs').tabs();

  $('.tabs-items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });

  $('.collapsible').collapsible();

  $('.slider-featured').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true
  });

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
Template.newspaper.onDestroyed(function(){

  // $('#modal-about, #modal-edit-profile, #modal-error-report').closeModal();

});
