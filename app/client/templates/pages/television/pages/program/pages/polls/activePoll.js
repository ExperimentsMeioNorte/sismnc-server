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
    return Answer.find(
      {
        status: 1,
        poll_id: Poll.findOne({status: 1, program_id: Router.current().params._id})._id
      }
    ).map(
      function(a){
        return {
          _id: a._id,
          description: a.description
        }
      }
    );
  }
});