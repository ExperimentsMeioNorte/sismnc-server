NewspaperSpecials = ApplicationController.extend();

Router.route('/jornal-meionorte/especiais', {
  name: 'newspaperSpecials',
  yieldRegions: {
    'headerSpecials': {to: 'header'},
    'searchNewspaper': {to: 'search'}
  },
  fastRender: true
});

Template.newspaperSpecials.onRendered(function(){

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

Template.newspaperSpecials.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});