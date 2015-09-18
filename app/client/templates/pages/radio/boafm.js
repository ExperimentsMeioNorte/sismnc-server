// Rota Boa FM
RadioController = ApplicationController.extend();

Router.route('/boafm', {
  name: 'boafm',
  yieldRegions: {
    'headerBOAFM': {to: 'header'}
  },
  fastRender: true
});