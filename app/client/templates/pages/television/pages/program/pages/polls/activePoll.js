Template.activePoll.events({
    'click .btn-answer': function(event){
        event.preventDefault();

        if(!document.querySelector('input[name="answer"]:checked').value){
            toastr.warning(
                "Ops, necessario escolher uma resposta.",
                '',
                {
                    "progressBar": true,
                    "positionClass": "toast-top-center",
                    "showDuration": "100"
                }
            );
        }else{
            Meteor.remote.call(
                'insertPollUser',
                [
                    111,
                    document.querySelector('#poll_id').value,
                    document.querySelector('input[name="answer"]:checked').value,
                    Meteor.remote.userId()
                ],
                function(error, result){
                    if(!result){
                        toastr.warning(
                            "Ops, algo deu errado.",
                            '',
                            {
                                "progressBar": true,
                                "positionClass": "toast-top-center",
                                "showDuration": "100"
                            }
                        );
                    }else{
                        toastr.success(
                            "Opa, obrigado por responder nossa enquete.",
                            '',
                            {
                                "progressBar": true,
                                "positionClass": "toast-top-center",
                                "showDuration": "100"
                            }
                        );
                        document.querySelector('.polls-answers').classList.add('hide');
                        document.querySelector('.results-question').classList.remove('hide');
                    }
                }
            );
        }
    }
});
