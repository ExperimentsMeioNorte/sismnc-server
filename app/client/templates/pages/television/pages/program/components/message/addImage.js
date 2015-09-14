Template.addImage.events({

  'focus #btn-close-add-image, click #btn-close-add-image': function () {
    document.querySelector('body').classList.remove('add-image-buttons');
  },
  'focus #btn-upload-image, click #btn-upload-image' : function(){
    document.querySelector('body').classList.remove('add-image-buttons');
    document.querySelector('body').classList.add('show-file-message');
  }

});
