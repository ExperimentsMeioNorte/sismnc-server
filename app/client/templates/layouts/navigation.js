Template.navigation.events({
  'click .item-logout' : function(event){
    event.preventDefault();
    Meteor.logout();
    Meteor.setTimeout(function(){
      Router.go('authentication');
    }, 1000)
  }
});
