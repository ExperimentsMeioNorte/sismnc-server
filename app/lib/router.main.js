ApplicationController = RouteController.extend({
  layoutTemplate: 'ApplicationLayout'
   onBeforeAction: function(){
        if(!Meteor.userId()){
          Router.go('authentication');
        }
        this.next();
   }
});

Router.configure({
  controller: 'ApplicationController',
  loadingTemplate: 'loading'
});
