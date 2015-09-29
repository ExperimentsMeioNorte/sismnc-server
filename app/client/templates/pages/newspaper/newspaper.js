// Rota Jornal
NewspaperController = ApplicationController.extend();

Router.route('/jornal-meionorte', {
  name: 'newspaper',
  yieldRegions: {
    'headerNewspaper': {to: 'header'},
    'navigationNewspaper': {to: 'navigation'},
    'contentNewspaperIndex': {to: 'content'},
    'searchNewspaper': {to: 'search'}
  },
  fastRender: true
});

Template.newspaper.onRendered(function(){

    Meteor.setTimeout(function(){
      document.querySelector('body').classList.add('show-tabs');
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

Template.newspaper.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});
