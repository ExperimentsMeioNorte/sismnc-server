// VEHICLE NEW PAGE
Template.vehicleNew.onRendered(function(){
	Session.set('getupFormImgBase64Avatar', null );
});

Template.vehicleNew.helpers({
	'imgBase64_avatar': function(){
		return Session.get('getupFormImgBase64Avatar');
	}
});

Template.vehicleNew.events({
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
		}else if((form.target[2].value).length > 600){
			toastr.warning(
				"rum, o campo descricao ultrapassou o limite de caracteres, somente possivel 600.",
				'',
				{"progressBar": true}
			);
		}else{
			Meteor.call(
				'insertVehicle',
				[
					111,
				    form.target[0].value,
			        form.target[1].value,
			        form.target[2].value,
			        Session.get('getupFormImgBase64Avatar'),
			        (form.target[5].checked)? 1 : 0,
			        Meteor.userId2
				],
				function(error, result){
					if(!error){
						//remove os dados dos campos do form para evitar a duplicidade do registro
						form.target[0].value = form.target[1].value = form.target[2].value = '';
						form.target[5].checked = false;
						Session.set( 'getupFormImgBase64Avatar', null );
						document.querySelector('#avatar_imgBase64').src = '#';

						Router.go('vehicle');

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