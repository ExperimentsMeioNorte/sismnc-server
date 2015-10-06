PortalBlogsPost = ApplicationController.extend();

Router.route('/portal-meionorte/blogs/post', {
  name: 'portalBlogsPost',
  yieldRegions: {
    'headerBlogsPost': {to: 'header'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});

Template.portalBlogsPost.onRendered(function(){

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

Template.portalBlogsPost.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});
