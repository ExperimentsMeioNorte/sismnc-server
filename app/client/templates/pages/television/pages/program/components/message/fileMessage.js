Meteor.startup(function(){
  Session.get('photo');
});

Template.fileMessageTelevision.events({
    'click #btn-cancel-file, focus #btn-cancel-file' : function(){
      document.querySelector('body').classList.remove('show-file-message-television');

      Session.setDefault('photo', null);
      
    }
});

Template.fileMessageTelevision.helpers({
  'photo': function() {
    return Session.get('photo');
  }
});
