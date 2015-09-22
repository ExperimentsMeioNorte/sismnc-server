NewspaperLatest = ApplicationController.extend();

Router.route('/jornal-meionorte/ultimas', {
  name: 'contentNewspaperLatest',
  yieldRegions: {
    'headerNewspaperLatest': {to: 'header'},
    'contentNewspaperLatest': {to: 'content'}
  },
  fastRender: true
});

Template.contentNewspaperLatest.onRendered(function(){

  document.querySelector('body').classList.add('show-tabs');

});

Template.contentNewspaperLatest.onDestroyed(function(){

  document.querySelector('body').classList.remove('show-tabs');

});