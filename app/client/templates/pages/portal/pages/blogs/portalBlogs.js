PortalBlogs = ApplicationController.extend();

Router.route('/portal-meionorte/blogs', {
  name: 'portalBlogs',
  yieldRegions: {
    'headerPortalBlogs': {to: 'header'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});

Template.portalBlogs.onRendered(function(){

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

Template.portalBlogs.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});
