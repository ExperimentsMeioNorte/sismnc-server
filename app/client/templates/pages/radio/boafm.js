// Rota Boa FM
Router.route('/boa-fm', {
  name: 'boafm',
  layoutTemplate: 'boafm',
  yieldTemplates: {
    'headerBOAFM': {to: 'header'}
  }
});