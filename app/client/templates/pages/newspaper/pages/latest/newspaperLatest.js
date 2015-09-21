NewspaperLatest = ApplicationController.extend();

Router.route('/jornal-meionorte/ultimas', {
  name: 'newspaperLatest',
  yieldRegions: {
    'headerNewspaper': {to: 'header'},
    'navigationNewspaper': {to: 'navigation'},
    'contentNewspaperLatest': {to: 'content'}
  },
  fastRender: true
});