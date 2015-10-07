Meteor.startup(function(){
  Session.setDefault('photo', null);
});


Template.addImageTelevision.events({
    'focus #btn-close-add-image, click #btn-close-add-image': function () {
      document.querySelector('body').classList.remove('add-image-buttons-television');
    },
   'focus #btn-capture-image, click #btn-capture-image': function () {
    if (Meteor.isClient) {

      var cameraOptions = {
        width: 640,
        height: 480,
        quality:70
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });

    } else {
      alert('Roda apenas no cordova');
    }
  },
  'focus #btn-upload-image, click #btn-upload-image' : function(){
    if (Meteor.isCordova) {
      var cameraOptions = {
        width: 640,
        height: 480,
        quality:70,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });
    } else {
      console.log('Roda apenas no cordova');
    }

    document.querySelector('body').classList.remove('add-image-buttons-television');
    document.querySelector('body').classList.add('show-file-message-television');

  }

});
