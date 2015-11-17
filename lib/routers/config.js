Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    onBeforeAction: function(){
      this.next();
    },
    action: function(){
     if(!Meteor.userId2){
        Router.go('/login');
      } else {
        this.render('loading');
      }
    }
});

Meteor.startup(function () {

  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }

});

Router.map(function() {

  this.route('index',
    {path: '/'}
  );

});
