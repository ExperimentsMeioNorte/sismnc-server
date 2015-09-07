// VEHICLE UPDATE PAGE
Template.vehicleUpdate.onRendered(function(){
	if(Router.current().params._id !== null){
		//preenche os campos
		document.querySelector("#vehicle_name").value = this.data.collection._docs['_map'][Router.current().params._id]['name'];
		document.querySelector("#vehicle_img_name").className = document.querySelector("#vehicle_img_name").className + ' valid active';
		document.querySelector("#vehicle_name").className = document.querySelector("#vehicle_name").className + ' valid';
		document.querySelector("#vehicle_label_name").className = ' active';

		document.querySelector("#vehicle_status").checked = (this.data.collection._docs['_map'][Router.current().params._id]['status'] === 1)? true : false;
		document.querySelector("#avatar_upload").src = this.data.collection._docs['_map'][Router.current().params._id]['image_avatar'];
		Session.set(
			'getupFormImgBase64Avatar',
			this.data.collection._docs['_map'][Router.current().params._id]['image_avatar']
		);

		if(this.data.collection._docs['_map'][Router.current().params._id]['description']){
			document.querySelector("#vehicle_description").value = this.data.collection._docs['_map'][Router.current().params._id]['description'];
			document.querySelector("#vehicle_img_description").className = document.querySelector("#vehicle_img_description").className + ' valid active';
			document.querySelector("#vehicle_description").className = document.querySelector("#vehicle_description").className + ' valid';
			document.querySelector("#vehicle_label_description").className = ' active';
		}

		if(this.data.collection._docs['_map'][Router.current().params._id]['feed_url']){
			document.querySelector("#vehicle_feedurl").value = this.data.collection._docs['_map'][Router.current().params._id]['feed_url'];
			document.querySelector("#vehicle_img_feedurl").className = document.querySelector("#vehicle_img_feedurl").className + ' valid active';
			document.querySelector("#vehicle_feedurl").className = document.querySelector("#vehicle_feedurl").className + ' valid';
			document.querySelector("#vehicle_label_feedurl").className = ' active';
		}
	}
});

Template.vehicleUpdate.helpers({
	'imgBase64_avatar': function(){
		return Session.get('getupFormImgBase64Avatar');
	}
});

Template.vehicleUpdate.events({
	'submit #vehicleForm': function(form){
		form.preventDefault();
		if(form.target[0].value === '' || !Session.get('getupFormImgBase64Avatar')){
			toastr.warning(
				"Preecha os campos obrigatórios.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[0].value).length > 200){
			toastr.warning(
				"rum, o campo nome ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[1].value).length > 600){
			toastr.warning(
				"rum, o campo descricao ultrapassou o limite de caracteres, somente possivel 600.",
				'',
				{"progressBar": true}
			);
		}else{
			Meteor.call(
				'updateVehicle',
				[
					222,
				    form.target[0].value,
			        form.target[1].value,
			        form.target[2].value,
			        Session.get('getupFormImgBase64Avatar'),
			        (form.target[5].checked)? 1 : 0,
			        Router.current().params._id,
			        Meteor.uderId2
				],
				function(error, result){
					if(!error){
						toastr.success(
							result,
							'',
							{"progressBar": true}
						);
					}else{
						toastr.warning(
							error.reason,
							'',
							{"progressBar": true}
						);
					}
				}
			);
		}
	},

	"change #avatar_upload": function(event,template){
	    var files = event.target.files;
	    if(files.length === 0){
	      return;
	    }
	    var file = files[0];
	    if(file.size > (3*100000)){
	    	toastr.warning(
	    		'A imagem ultrapassou o limite de 3mb.',
	    		'',
	    		{"progressBar": true}
			);
	    }else{

		    var fileReader = new FileReader();
		    fileReader.onload = function(event){
		      	Session.set(
			      	'getupFormImgBase64Avatar',
			      	(event.target.result)? event.target.result : false
		      	);
		    };

		    fileReader.readAsDataURL(file);
		}
  	}
});