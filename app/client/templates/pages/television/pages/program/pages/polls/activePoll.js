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