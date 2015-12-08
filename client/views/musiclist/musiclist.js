Meteor.setInterval(updateDateRecord, 1000 * 60);

Template.musiclist.created = function(){
  Meteor.getDateHour();
}

Template.musiclist.rendered = function(){
    var userSearch = User.findOne({_id:Meteor.userId2}, {$fields: {_id:1, level:1}});
    Session.set('getupDataUser', userSearch);
    Session.set('limit', 5);
    /*$(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
          incrementLimit();
        }
    });*/

	$('.collection').collapsible({
      accordion : false
  	});

     $('.modal-trigger').leanModal();
}

Template.musiclist.helpers({
	'contents': function(){
        var find = {};

        if(Meteor.userLevel === 1){
            find = {
                program_id: Meteor.userProgram
                // date_record: {
                //     $gte: Session.get('getupDateBegin'),
                //     $lte: Session.get('getupDateEnd')
                // }
            };
        }

		var dateRecords = [];
		var i = 0;
    	return Musiclist.find(
            find,
            {
                sort: {sequence_id: -1},
                limit: Session.get('limit')
            }
        ).map(
    		function(m) {
    			dateRecords[i] = {
    				_id:m._id,
    				date_record:m.date_record
    			};
    			Session.set('getupDateRecods', dateRecords);
    			i++;

    			Meteor.call(
    				'timeCompare',
    				m.date_record,
    				function(error, result){
    					Session.set('getupToolTimeCompare' + m._id, result);
    				}
				);

    			return {
    				_id:                    m._id,
            program_id:             m.program_id,
    				text:                   m.text,
    				actor:                  m.actor,
    				timeCompared:           Session.get('getupToolTimeCompare' + m._id),
    				user_name:              User.find({_id:m.user_id}).map(
          				function(u){
          						return u.name;
      						}
      					)
    			};
    		}
		);
	},

    'mais': function(){
        var find = {};

        if(Meteor.userLevel === 1){
            find = {
                program_id: Meteor.userProgram
                // date_record: {
                //     $gte: Session.get('getupDateBegin'),
                //     $lte: Session.get('getupDateEnd')
                // }
            };
        }

        return (Session.get('limit') >= Musiclist.find(find).count())? 'display:none' : 'display:block';
    }
});

Template.musiclist.events({
    'click #mais': function(){
        incrementLimit();
    }
});

