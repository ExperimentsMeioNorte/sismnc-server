Template.login.events({
	'submit #login-form' : function(event, template){
		event.preventDefault();
		var userId = User.findOne(
    		{
    			email:template.find('#login-email').value,
    			password:CryptoJS.MD5(template.find('#login-email').value + template.find('#login-password').value).toString()
    		},
            {$or: [{level: 1},{level: 2}]}
		);

		if(userId === undefined){
        	toastr.warning(
				"Ops, Login ou senha inválidos tente novamente.",
				'',
				{"progressBar": false, "positionClass": "toast-top-center", "showDuration": "100"}
			);
		}else{
            Meteor.userLevel = userId.level;
			Meteor.userId2 = userId._id;
            //Meteor.setUserId(userId._id);
			Router.go('index');
		}
	}
});