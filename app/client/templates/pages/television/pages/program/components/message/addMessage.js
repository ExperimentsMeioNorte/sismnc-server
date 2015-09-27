Template.addMessage.events({

    'focus #btn-show-add-video, click #btn-show-add-video': function () {
        document.querySelector('body').classList.add('add-video-buttons-television');
    },

    'click #sendMsg': function(){
        //events.preventDefault();
        console.log('clicou');
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
