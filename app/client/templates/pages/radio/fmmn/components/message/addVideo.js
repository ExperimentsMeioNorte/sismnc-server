// Rota do Programa
Template.addVideoFMMN.events({

  'focus #btn-close-add-video, click #btn-close-add-video': function () {
    document.querySelector('body').classList.remove('add-video-buttons-fmmn');
  },

  'focus #btn-upload-video, click #btn-upload-video' : function(){
    document.querySelector('body').classList.remove('add-video-buttons-fmmn');
    document.querySelector('body').classList.add('show-file-message-fmmn');
  }

});
