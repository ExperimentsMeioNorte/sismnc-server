Template.navigation.events({
  'click .item-logout' : function(event){
    event.preventDefault();
    Meteor.logout();
    Meteor.setTimeout(function(){
      Router.go('authentication');
    }, 1000)
  }
});

Template.navigation.helpers({
  userName: function () {
    return Router.current().data()['name'];
  },
  avatar: function () {
    return Router.current().data()['avatar'];
  },
  email: function () {
    return Router.current().data()['email'];
  }
});
