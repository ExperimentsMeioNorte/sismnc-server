// Rota Portal
Router.route('/rede-meionorte', {
  name: 'televisao',
  layoutTemplate: 'television',
  yieldTemplates: {
    'headerTelevision': {to: 'header'}
  }
});