// Rota Jornal
Router.route('/jornal-meionorte', {
  name: 'newspaper',
  layoutTemplate: 'newspaper',
  yieldTemplates: {
    'headerNewspaper': {to: 'header'}
  }
});