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
        var user = User.findOne(
          {
            _id:c.user_id
          },
          {fields:
            {
              name:1,
              avatar:1
            }
          }
        );

        return {
          _id: c._id,
          text: c.text,
          img: c.img,
          video: c.video,
          date_record: c.date_record,
          user_name: user.name,
          user_avatar: user.avatar
        };
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

Template.timeline.events({
  // paginacao
  'click #mais': function(){
    Meteor.incrementLimit();
  },

  'click #sendMsg': function(){
    console.log('clicou2');
  }
});