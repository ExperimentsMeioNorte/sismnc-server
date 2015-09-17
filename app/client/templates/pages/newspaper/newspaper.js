// Rota Jornal
NewspaperController = ApplicationController.extend();

Router.route('/jornal-meionorte', {
  name: 'newspaper',
  yieldRegions: {
    'headerNewspaper': {to: 'header'}
  },
  fastRender: true
});
