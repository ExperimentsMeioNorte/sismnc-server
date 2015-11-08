// CATEGORY NEW PAGE
Template.programNew.onRendered(function(){
	Session.set('getupFormImgBase64Top', '');
});

Template.cityNew.helpers({
	'imgBase64_topo': function(){
		return Session.get('getupFormImgBase64Top');
	}
});

Template.cityNew.events({
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
			console.log(form);
			Meteor.call(
				'insertCity',
				[
					111,
				    form.target[0].value,
				    Session.get('getupFormImgBase64Top'),
				    (form.target[3].checked)? 1 : 0,
			        Meteor.userId2
				],
				function(error, result){
					if(!error){
						//remove os dados dos campos do form para evitar a duplicidade do registro
						form.target[0].value = '';
						form.target[3].checked = false;
						Session.set('getupFormImgBase64Top', '');

						Router.go('city');

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