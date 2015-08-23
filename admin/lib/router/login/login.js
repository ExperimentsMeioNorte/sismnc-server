Router.route('/login', {
    name: 'login',
    controller: RouteController.extend({
        layoutTemplate: 'login',
        onBeforeAction: function(){
            Meteor.zion.functions.validateUserLogin();
            Meteor.zion.functions.accountUiConfig();
            this.next();
        }
    })
});