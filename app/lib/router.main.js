Router.configure({
    layoutTemplate: 'ApplicationLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    onBeforeAction: function(){
        if(!Meteor.userId()){
            Router.go('auth');
        }
        this.next();
    }

});
