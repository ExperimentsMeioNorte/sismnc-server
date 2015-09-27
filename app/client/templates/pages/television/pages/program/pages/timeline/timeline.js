Template.timeline.helpers({
  'contents': function(){
    return Content.find(
    {
      program_id:Router.current().params._id},
    {
      sort: {date_record:"desc"}
    },
    {
      limit: Session.get('limit')
    }).map(
      function(c) {
        var user = User.find(
        {
          _id:c.user_id
        }).map(
          function(u){
            return {
              name: u.name,
              avatar: u.avatar
            }
          }
        );

        if(c.user_id){
          return {
            _id: c._id,
            text: c.text,
            img: c.img,
            video: c.video,
            date_record: c.date_record,
            user_name: user[0].name,
            user_avatar: user[0].avatar
          };
        }else{
          return '';
        }
      }
    );
  },

  // paginacao
  'mais': function(){
    return (Session.get('limit') >= Content.find(
      {
        user_id: Meteor.remote.userId(),
        program_id:Router.current().params._id
      }).count())? 'display:none' : 'display:block';
  }
});