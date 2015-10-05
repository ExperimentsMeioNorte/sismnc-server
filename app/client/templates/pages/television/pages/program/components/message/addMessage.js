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
            console.log('Precisa de um texto');
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
                        console.log('Nova Mensagem');
                    }else{
                        console.log('Não deu Nova Mensagem');
                    }
                }
            );
        }
    }

});
