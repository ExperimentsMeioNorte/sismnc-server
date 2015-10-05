// Rota Portal
PortalController = ApplicationController.extend();

Router.route('/portal-meionorte', {
  name: 'portal',
  yieldRegions: {
    'headerPortal': {to: 'header'},
    'navPortal': {to: 'navigation'},
    'contentPortalIndex': {to: 'content'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});


Template.portal.onRendered(function(){

    Meteor.setTimeout(function(){
      document.querySelector('body').classList.add('show-tabs-portal');
    }, 1000);

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

Template.portal.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs-portal');

});
