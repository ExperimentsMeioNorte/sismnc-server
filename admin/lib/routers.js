Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', {
    controller: Meteor.zion.home.controller
});

Router.route('/login', {
    name: 'login',
    controller: Meteor.zion.login.controller
});