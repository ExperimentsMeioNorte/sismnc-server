Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// Rota Principal
Router.route('/', {
  name: 'layout',
  layoutTemplate: 'ApplicationLayout',
  yieldTemplates: {
    'header': {to: 'header'}
  }
});