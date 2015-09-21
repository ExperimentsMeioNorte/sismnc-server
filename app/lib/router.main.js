ApplicationController = RouteController.extend({
  layoutTemplate: 'ApplicationLayout',
   // onBeforeAction: function(){
   //      //if(!Meteor.remote.userId()){ // habilitar em producao
   //      if(!Meteor.userId()){ // habilitar em desenvolvimento
   //        Router.go('authentication');
   //      }
   //      this.next();
   // }
   onBeforeAction: function () {
    this.next();
  }
});

Router.configure({
  controller: 'ApplicationController',
  loadingTemplate: 'loading'
});
