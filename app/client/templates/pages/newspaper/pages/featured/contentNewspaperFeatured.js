
// Ao Entrar
Template.contentNewspaperFeatured.onRendered(function(){

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true
    }
  );

  $('.tabs-items').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
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
Template.contentNewspaperFeatured.onDestroyed(function(){

  $('ul.tabs').tabs();

});
