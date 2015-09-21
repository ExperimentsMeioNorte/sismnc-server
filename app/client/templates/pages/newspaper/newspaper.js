// Rota Jornal
NewspaperController = ApplicationController.extend();

Router.route('/jornal-meionorte', {
  name: 'newspaper',
  yieldRegions: {
    'headerNewspaper': {to: 'header'},
    'navigationNewspaper': {to: 'navigation'},
    'contentNewspaperFeatured': {to: 'content'}
  },
  fastRender: true
});

// 'newspaperFeatured': {to: 'featured'},
// 'newspaperLatest': {to: 'latest'},
// 'newspaperSection': {to: 'section'},
// 'newspaperColumns': {to: 'columns'},
// 'newspaperSpecials': {to: 'specials'},
// 'newspaperPhotos': {to: 'photos'},
// 'newspaperVideos': {to: 'videos'},

// Ao Entrar
Template.newspaper.onRendered(function(){

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true
    }
  );



  // $('ul.tabs').tabs();

  // function tabInit() {
  //     $('ul.tabs').tabs();
  // }

  // $.ajax({
  //     type: "GET",
  //     url: "/",
  //     dataType: "json",
  //     success: tabInit
  // });

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
Template.newspaper.onDestroyed(function(){

  $('ul.tabs').tabs();

});
