// Rota FM Meio norte
RadioController = ApplicationController.extend();

Router.route('/fmmeionorte', {
  name: 'fmmn',
  yieldRegions: {
    'headerFMMN': {to: 'header'}
  },
  fastRender: true
});