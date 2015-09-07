// PROGRAM NEW PAGE
Template.programUpdate.rendered = function () {
	if(Router.current().params._id !== null){
		//preeche o select option de veiculo
		var vehicle = Vehicle.find().map(function(vehicleData) {
			return [
				vehicleData._id,
				vehicleData.name
			];
		});

		for(var i in vehicle){
			activeSelected = (this.data.collection._docs['_map'][Router.current().params._id]['vehicle_id'] === vehicle[i][0])? ['active', 'selected'] : ['',''];

			$("#program_vehicle").append("<option value=\""+vehicle[i][0]+"\" "+activeSelected[1]+">"+vehicle[i][1]+"<option/>");
			$(".dropdown-content").append("<li class=\""+activeSelected[0]+"\"><span>"+vehicle[i][1]+"</span></li>");
		}

		//preeche o select option de categoria
		var category = Category.find().map(function(categoryData) {
			return [
				categoryData._id,
				categoryData.description
			];
		});

		for(var i in category){
			activeSelected = (this.data.collection._docs['_map'][Router.current().params._id]['category_id'] === category[i][0])? ['active', 'selected'] : ['',''];

			$("#program_category").append("<option value=\""+category[i][0]+"\" "+activeSelected[1]+">"+category[i][1]+"<option/>");
			$(".dropdown-content").append("<li class=\""+activeSelected[0]+"\"><span>"+category[i][1]+"</span></li>");
		}

		//preenche os outros campos
		document.querySelector("#program_name").value = this.data.collection._docs['_map'][Router.current().params._id]['name'];
		document.querySelector("#program_img_name").className = document.querySelector("#program_img_name").className + ' valid active';
		document.querySelector("#program_name").className = document.querySelector("#program_name").className + ' valid';
		document.querySelector("#program_label_name").className = ' active';

		if(this.data.collection._docs['_map'][Router.current().params._id]['description']){
			document.querySelector("#program_description").value = this.data.collection._docs['_map'][Router.current().params._id]['description'];
			document.querySelector("#program_img_description").className = document.querySelector("#program_img_description").className + ' valid active';
			document.querySelector("#program_description").className = document.querySelector("#program_description").className + ' valid';
			document.querySelector("#program_label_description").className = ' active';
		}

		if(this.data.collection._docs['_map'][Router.current().params._id]['hour']){
			document.querySelector("#program_hour").value = this.data.collection._docs['_map'][Router.current().params._id]['hour'];
			document.querySelector("#program_img_hour").className = document.querySelector("#program_img_hour").className + ' valid active';
			document.querySelector("#program_hour").className = document.querySelector("#program_hour").className + ' valid';
			document.querySelector("#program_label_hour").className = ' active';
		}

		if(this.data.collection._docs['_map'][Router.current().params._id]['day']){
			document.querySelector("#program_day").value = this.data.collection._docs['_map'][Router.current().params._id]['day'];
			document.querySelector("#program_img_day").className = document.querySelector("#program_img_day").className + ' valid active';
			document.querySelector("#program_day").className = document.querySelector("#program_day").className + ' valid';
			document.querySelector("#program_label_day").className = ' active';
		}

		if(this.data.collection._docs['_map'][Router.current().params._id]['facebook_url']){
			document.querySelector("#social_facebook").value = this.data.collection._docs['_map'][Router.current().params._id]['facebook_url'];
			document.querySelector("#social_facebook").className = document.querySelector("#social_facebook").className + ' valid';
			document.querySelector("#social_label_facebook").className = ' active';
		}

		if(this.data.collection._docs['_map'][Router.current().params._id]['google_url']){
			document.querySelector("#social_google").value = this.data.collection._docs['_map'][Router.current().params._id]['google_url'];
			document.querySelector("#social_google").className = document.querySelector("#social_google").className + ' valid';
			document.querySelector("#social_label_google").className = ' active';
		}

		document.querySelector("#topo_upload").src = this.data.collection._docs['_map'][Router.current().params._id]['image_folder'];
		document.querySelector("#avatar_upload").src = this.data.collection._docs['_map'][Router.current().params._id]['image_avatar'];
		document.querySelector("#program_status").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['status'] === 1)? true : false);

		Session.set(
			'getupFormImgBase64Top',
			this.data.collection._docs['_map'][Router.current().params._id]['image_folder']
		);
		Session.set(
			'getupFormImgBase64Avatar',
			this.data.collection._docs['_map'][Router.current().params._id]['image_avatar']
		);
	}

	VMasker(this.find("[data-vm-mask-hour]")).maskPattern("99:99");
	$('select').material_select();
};

Template.programUpdate.helpers({
	'imgBase64_topo': function(){
		return Session.get('getupFormImgBase64Top');
	},

	'imgBase64_avatar': function(){
		return Session.get('getupFormImgBase64Avatar');
	}
});

Template.programUpdate.events({
	'submit #programForm': function(form){
		form.preventDefault();
		if(form.target[0].value === '' || form.target[1].value === '' || form.target[2].value === '' || !Session.get('getupFormImgBase64Top') || !Session.get('getupFormImgBase64Avatar')){
			toastr.warning(
				"Preecha os campos obrigatórios.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[2].value).length > 200 || (form.target[5].value).length > 200){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[3].value).length > 600){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 600.",
				'',
				{"progressBar": true}
			);
		}else{
			Meteor.call(
				'updateProgram',
				[
					222,
					form.target[1].value,
					form.target[3].value,
					form.target[4].value,
					form.target[5].value,
					form.target[6].value,
					form.target[7].value,
					form.target[8].value,
					form.target[9].value,
					Session.get('getupFormImgBase64Avatar'),
					Session.get('getupFormImgBase64Top'),
					((form.target[14].checked)? 1 : 0),
					Router.current().params._id,
					Meteor.userId2
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

	"change #topo_upload": function(event,template){
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
			      	'getupFormImgBase64Top',
			      	(event.target.result)? event.target.result : false
	      		);
		    };

		    fileReader.readAsDataURL(file);
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