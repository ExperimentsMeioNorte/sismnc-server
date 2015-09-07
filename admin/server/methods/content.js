Meteor.methods({
	'insertContent': function(data){
	    if(data[0] !== 111){
	    	return false;
    	}

    	Content.insert(
    		{
    			program_id:data[1],
    			user_id:data[2],
    			text:data[3],
    			img:data[4],
          video:data[5],
          status:data[6],
          user_record:Meteor.userId(),
          user_change:Meteor.userId(),
    			date_record:Meteor.call('dateNow'),
    			date_change:Meteor.call('dateNow')
    		}
  		);
  		return true;
	},

  'updateContent': function(data){
    if(data[0] === 222){
      Content.update(
        {_id:data[1]},
        {$set:
          {
            program_id:data[2],
            user_id:data[3],
            text:data[4],
            img:data[5],
            video:data[6],
            status:data[7],
            user_change:Meteor.userId(),
            date_change:Meteor.call('dateNow')
          }
        }
      );
    }else{
      //erro aqui
    }
  },

	'deleteContent': function(data){
		if(data[0] === 333){
      Content.update(
        {_id:data[1]},
        {$set:
          {
            status:0,
            user_change:Meteor.userId(),
            date_change:Meteor.call('dateNow')
          }
        }
      );
    }else{
      //erro aqui
    }
	}
});