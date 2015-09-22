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

Template.newspaper.onRendered(function(){

    Meteor.setTimeout(function(){
      document.querySelector('body').classList.add('show-tabs');
    }, 1000);

});

Template.newspaper.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});