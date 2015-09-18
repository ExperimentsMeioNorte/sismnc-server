// Rota Portal
NewspaperController = ApplicationController.extend();

Router.route('/portal-meionorte', {
  name: 'portal',
  yieldRegions: {
    'headerPortal': {to: 'header'}
  },
  fastRender: true
});