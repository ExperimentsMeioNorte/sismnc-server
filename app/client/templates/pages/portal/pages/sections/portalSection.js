PortalSection = ApplicationController.extend();

Router.route('/portal-meionorte/secao', {
  name: 'portalSection',
  yieldRegions: {
    'headerPortalSection': {to: 'header'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});

Template.portalSection.onRendered(function(){

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

Template.portalSection.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});
