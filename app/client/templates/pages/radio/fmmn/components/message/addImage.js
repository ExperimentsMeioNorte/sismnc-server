Template.addImageFMMN.events({

  'focus #btn-close-add-image, click #btn-close-add-image': function () {
    document.querySelector('body').classList.remove('add-image-buttons-fmmn');
  },
  'focus #btn-upload-image, click #btn-upload-image' : function(){
    document.querySelector('body').classList.remove('add-image-buttons-fmmn');
    document.querySelector('body').classList.add('show-file-message-fmmn');
  }

});
