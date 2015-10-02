Template.addMessage.events({

    'focus #btn-show-add-image, click #btn-show-add-image': function () {
        document.querySelector('body').classList.add('add-image-buttons-television');
    },

    'focus #btn-show-add-video, click #btn-show-add-video': function () {
        document.querySelector('body').classList.add('add-video-buttons-television');
    },

    'click .send-button': function(events){
        events.preventDefault();
        if(!document.querySelector('#message').value){
            toastr.warning(
                "Ops, necessário preencher um texto.",
                '',
                {"progressBar": true}
            );
        }else{
            Meteor.remote.call(
                'insertContent',
                [
                    111,
                    Router.current().params._id,
                    Meteor.remote.userId(),
                    document.querySelector('#message').value, // texto
                    '', // imagem
                    '', // video
                    1,
                ],
                function(error, result){
                    if(!error){
                        //remove os dados dos campos do form para evitar a duplicidade do registro
                        document.querySelector('#message').value = '';
                        toastr.success(
                            result,
                            '',
                            {"progressBar": true}
                        );
                    }else{
                        toastr.warning(
                            error.reason,
                            '',
                            {"progressBar": true}
                        );
                    }
                }
            );
        }
    }

});
