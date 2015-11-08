// CATEGORY UPDATE PAGE
Template.cityUpdate.onRendered(function(){
	if(Router.current().params._id !== null){
		//preenche os campos
		Session.set('getupFormImgBase64Top', this.data.collection._docs['_map'][Router.current().params._id]['image']);
		document.querySelector("#topo_upload").src = this.data.collection._docs['_map'][Router.current().params._id]['image'];

		document.querySelector("#city_name").value = this.data.collection._docs['_map'][Router.current().params._id]['name'];
		document.querySelector("#city_img_name").className = document.querySelector("#city_img_name").className + ' valid active';
		document.querySelector("#city_name").className = document.querySelector("#city_name").className + ' valid';
		document.querySelector("#city_label_name").className = ' active';

		document.querySelector("#city_status").checked = (this.data.collection._docs['_map'][Router.current().params._id]['status'] === 1)? true : false;
	}
});

Template.cityUpdate.helpers({
	'imgBase64_topo': function(){
		return Session.get('getupFormImgBase64Top');
	}
});

Template.cityUpdate.events({
	'submit #cityForm': function(form){
		form.preventDefault();
		if(form.target[0].value === '' || !Session.get('getupFormImgBase64Top')){
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
		}else{
			Meteor.call(
				'updateCity',
				[
					222,
				    form.target[0].value,
				    Session.get('getupFormImgBase64Top'),
			        (form.target[3].checked)? 1 : 0,
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
	}
});