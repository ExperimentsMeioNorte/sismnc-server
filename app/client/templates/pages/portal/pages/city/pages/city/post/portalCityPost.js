PortalCityPost = ApplicationController.extend();

Router.route('/portal-meionorte/cidades/post', {
  name: 'portalCityPost',
  yieldRegions: {
    'headerCityPost': {to: 'header'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});

Template.portalCityPost.onRendered(function(){

  document.querySelector('body').classList.add('show-tabs');

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

Template.portalCityPost.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});
