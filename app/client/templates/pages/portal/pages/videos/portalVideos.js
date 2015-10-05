PortalVideos = ApplicationController.extend();

Router.route('/portal-meionorte/videos', {
  name: 'portalVideos',
  yieldRegions: {
    'headerPortalVideos': {to: 'header'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});

Template.portalVideos.onRendered(function(){

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

Template.portalVideos.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});
