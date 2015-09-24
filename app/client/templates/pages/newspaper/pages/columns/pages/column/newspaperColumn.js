NewspaperColumn = ApplicationController.extend();

Router.route('/jornal-meionorte/colunas/coluna', {
  name: 'newspaperColumn',
  yieldRegions: {
    'headerColumn': {to: 'header'}
  },
  fastRender: true
});

Template.newspaperColumn.onRendered(function(){

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

Template.newspaperColumn.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});