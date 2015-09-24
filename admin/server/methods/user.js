Meteor.methods({

	'insertUser': function(data){
		if(data[0] === 111){
		    return User.insert(
		    	{
	    			level: data[1],
		    		name: data[2],
		    		avatar: data[3],
		    		email: data[4],
		    		password:CryptoJS.MD5(data[4] + data[5]).toString(),
		    		facebook_id: data[6],
		    		google_id: data[7],
		    		status: data[8],
		    		user_record: Meteor.userId(),
		    		user_change: Meteor.userId(),
		    		date_record:Meteor.call('dateNow'),
		    		date_change:Meteor.call('dateNow')
		    	}
	    	);
	    	//return true;
		}else{
			return false;
		}
	},

	'updateUser': function(data){
		if(data[0] === 222){
	   		User.update(
	   			{_id:data[1]},
	   			{$set:
	   				{

		    			level: data[2],
			    		name: data[3],
			    		avatar: data[4],
			    		email: data[5],
			    		password:(data[6])? CryptoJS.MD5(data[5] + data[6]).toString() : 'anterior',
			    		facebook_id: data[7],
			    		google_id: data[8],
			    		status: data[9],
			    		user_change: Meteor.userId(),
			    		date_change:Meteor.call('dateNow')
	   				}
	   			}
   			);
		}else{
		  //erro aqui
		}
	},

	'deleteUser': function(data){
		if(data[0] === 333){
		  	User.update(
		  		{_id:data[1]},
		  		{$set:
		  			{
		  				status:0,
		  				user_change:Meteor.userId(),
		  				date_change:Meteor.call('dateNow')
		  			}
		  		}
	  		);
		}
	},

	'updateUserPassword': function(data){
		if(data[0] === 222){
	   		User.update(
	   			{_id:data[1]},
	   			{$set:
	   				{
	   					password:CryptoJS.MD5(data[2] + data[3]).toString(),
	   					date_change:Meteor.call('dateNow')
	   				}
	   			}
   			);
		}else{
		  //erro aqui
		}
	},

	'insertLevel': function(){
		Level.insert({status:1, level:'0', description:'Usuario'});
		Level.insert({status:1, level:'1', description:'Programa'});
		Level.insert({status:1, level:'2', description:'Administrador'});
		return true;
	},

	'insertUserAdmin': function(){
		User.insert(
	    	{
    			level: '2',
	    		name: 'root',
	    		avatar: null,
	    		email:'r@gmail.com',
	    		password:CryptoJS.MD5('r@gmail.com' + '123').toString(),
	    		facebook_id: null,
	    		google_id: null,
	    		status: 1,
	    		user_record: 1,
	    		user_change: 1,
	    		date_record:Meteor.call('dateNow'),
	    		date_change:Meteor.call('dateNow')
	    	}
    	);
		return true;
	}

});