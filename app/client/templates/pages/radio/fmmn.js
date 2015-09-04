// Rota Jornal
Router.route('/fm-meionorte', {
  name: 'fmmn',
  layoutTemplate: 'fmmn',
  yieldTemplates: {
    'headerFMMN': {to: 'header'}
  }
});