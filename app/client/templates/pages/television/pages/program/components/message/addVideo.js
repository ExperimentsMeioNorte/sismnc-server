// Rota do Programa
Template.addVideo.events({

  'focus #btn-close-add-video, click #btn-close-add-video': function () {
    document.querySelector('body').classList.remove('add-video-buttons');
  },

  'focus #btn-upload-video, click #btn-upload-video' : function(){
    document.querySelector('body').classList.remove('add-video-buttons');
    document.querySelector('body').classList.add('show-file-message');
  }

});
