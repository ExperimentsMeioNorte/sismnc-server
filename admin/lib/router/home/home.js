Router.route('/', {
    controller: RouteController.extend({
        layoutTemplate: 'ApplicationLayout',
        yieldTemplates: {
            'header': {to: 'header'},
            'footer': {to: 'footer'},
        }
    })
});