// Rota Portal
PortalController = ApplicationController.extend();

Router.route('/portal-meionorte', {
  name: 'portal',
  yieldRegions: {
    'headerPortal': {to: 'header'},
    'navigationPortal': {to: 'navigation'},
    'contentPortalIndex': {to: 'content'},
    'searchPortal': {to: 'search'}
  },
  fastRender: true
});
