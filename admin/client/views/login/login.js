Template.login.events({
	'submit #login-form' : function(event, template){
		event.preventDefault();
		var userId = User.findOne(
    		{
    			email: document.querySelector("#login-email").value,
    			password: CryptoJS.MD5(document.querySelector("#login-email").value + document.querySelector("#login-password").value).toString(),
                status: 1
    		},
            {$or: [
                {level: '1'},
                {level: '2'}
            ]}
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