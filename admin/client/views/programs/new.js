// PROGRAM NEW PAGE
Template.programNew.onRendered(function(){
	Session.set( 'getupFormImgBase64Top', null );
	Session.set( 'getupFormImgBase64Avatar', null );
	VMasker(this.find("[data-vm-mask-hour]")).maskPattern("99:99");

	//preeche o select option de programa
	var vehicle = Vehicle.find().map(function(vehicleData) {
		return [
			vehicleData._id,
			vehicleData.name
		];
	});

	for(var i in vehicle){
		$("#program_vehicle").append("<option value=\""+vehicle[i][0]+"\">"+vehicle[i][1]+"<option/>");
		$(".dropdown-content").append("<li class=\"\"><span>"+vehicle[i][1]+"</span></li>");
	}

	//preeche o select option de categoria
	var category = Category.find().map(function(categoryData) {
		return [
			categoryData._id,
			categoryData.description
		];
	});

	for(var i in category){
		$("#program_category").append("<option value=\""+category[i][0]+"\">"+category[i][1]+"<option/>");
		$(".dropdown-content").append("<li class=\"\"><span>"+category[i][1]+"</span></li>");
	}

	$('select').material_select();
});

Template.programNew.helpers({
	'imgBase64_topo': function(){
		return Session.get('getupFormImgBase64Top');
	},

	'imgBase64_avatar': function(){
		return Session.get('getupFormImgBase64Avatar');
	}
});

Template.programNew.events({
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
				'insertProgram',
				[
					111,
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
					Meteor.userId2
				],
				function(error, result){
					if(!error){
						//remove os dados dos campos do form para evitar a duplicidade do registro
						form.target[0].value = form.target[1].value = form.target[2].value = form.target[3].value = form.target[4].value = form.target[5].value = form.target[6].value = form.target[7].value = '';
						form.target[12].checked = false;
						Session.set( 'getupFormImgBase64Top', null );
						Session.set( 'getupFormImgBase64Avatar', null );
						document.querySelector('#topo_imgBase64').src = '#';
						document.querySelector('#avatar_imgBase64').src = '#';

						Router.go('programs');

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