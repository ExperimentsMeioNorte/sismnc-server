Template.activePoll.onRendered(function(){
    var poll = Poll.find(
      {
        status: 0,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );

    if(poll && poll[0] !== undefined){
        console.log(poll[0]._id);
        var pollUser = PollUser.find(
        {
            status: 1,
            poll_id: poll[0]._id,
            user_id: Meteor.remote.userId()
        }).map(
          function(pu){
            return {
              _id: pu._id
            }
          }
        );

        if(pollUser  && pollUser[0] !== undefined){
            document.querySelector('.polls-answers').classList.add('hide');
            document.querySelector('.results-question').classList.remove('hide');
        }
    }else{
        document.querySelector('.polls-answers').classList.add('hide');
        document.querySelector('.message-feedback').classList.remove('hide');
    }
});

Template.activePoll.helpers({
  // mostra a televisao
  poll: function(){
    return Poll.find(
      {
        status: 1,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );
  },

  answers: function(){
    var poll = Poll.find(
      {
        status: 1,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );

    if(poll && poll[0] !== undefined){
      return Answer.find(
        {
          status: 1,
          poll_id: poll[0]._id
        }
      ).map(
        function(a){
          return {
            _id: a._id,
            description: a.description
          }
        }
      );
    }else{
      return '';
    }
  }
});

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