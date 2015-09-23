NewspaperSection = ApplicationController.extend();

Router.route('/jornal-meionorte/secao', {
  name: 'newspaperSection',
  yieldRegions: {
    'headerSection': {to: 'header'},
    'searchNewspaper': {to: 'search'}
  },
  fastRender: true
});

Template.newspaperSection.onRendered(function(){

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

Template.newspaperSection.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});