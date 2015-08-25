Router.configure({
    progress : true,
    progressDebug : true,
    controller: RouteController.extend({
        layoutTemplate: 'ApplicationLayout'
    }),
    onBeforeAction: function(){
        if(Meteor.userId === undefined || Meteor.userId() === null){ Router.go('/login'); }
        this.next();
    }
});