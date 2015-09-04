// Rota Portal
Router.route('/portal-meionorte', {
  name: 'portal',
  layoutTemplate: 'portal',
  yieldTemplates: {
    'headerPortal': {to: 'header'}
  }
});