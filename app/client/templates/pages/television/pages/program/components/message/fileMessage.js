Template.fileMessageTelevision.events({
    'click #btn-cancel-file, focus #btn-cancel-file' : function(){
      document.querySelector('body').classList.remove('show-file-message-television');
    }
});

Template.fileMessageTelevision.helpers({
  img: function() {
    return Session.get('img');
  }
});
