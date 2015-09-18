ApplicationController = RouteController.extend({
  layoutTemplate: 'ApplicationLayout',
   onBeforeAction: function(){
        if(!Meteor.userId()){
            Router.go('auth');
        }
        this.next();
   }
});

Router.configure({
  controller: 'ApplicationController',
  loadingTemplate: 'loading'
});
