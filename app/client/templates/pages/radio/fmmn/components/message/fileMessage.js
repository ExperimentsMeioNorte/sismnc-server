Template.fileMessageFMMN.events({
    'click #btn-cancel-file, focus #btn-cancel-file' : function(){
      document.querySelector('body').classList.remove('show-file-message');
    }
});