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

Router.route('/television', {
    name: 'television',
    controller: Meteor.zion.television.controller
});

Router.route('/newspaper', {
    name: 'newspaper',
    controller: Meteor.zion.newspaper.controller
});

Router.route('/portal', {
    name: 'portal',
    controller: Meteor.zion.portal.controller
});

Router.route('/boafm', {
    name: 'boafm',
    controller: Meteor.zion.boafm.radio.controller
});
Router.route('/fmmn', {
    name: 'fmmn',
    controller: Meteor.zion.boafm.radio.controller
});