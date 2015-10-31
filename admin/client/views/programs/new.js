// PROGRAM NEW PAGE
Template.programNew.onRendered(function(){
	Session.set( 'getupFormImgBase64Top', null );
	Session.set( 'getupFormImgBase64Avatar', null );
	VMasker(this.find("[data-vm-mask-hour-begin]")).maskPattern("99:99");
	VMasker(this.find("[data-vm-mask-hour-end]")).maskPattern("99:99");

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

	//preeche o select option de cidade
	var city = City.find().map(function(cityData) {
		return [
			cityData._id,
			cityData.name
		];
	});

	for(var i in city){
		$("#program_city").append("<option value=\""+city[i][0]+"\">"+city[i][1]+"<option/>");
		$(".dropdown-content").append("<li class=\"\"><span>"+city[i][1]+"</span></li>");
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
		if(form.target[1].value === ''
			|| form.target[3].value === ''
			|| form.target[5].value === ''
			|| form.target[6].value === ''
			|| !Session.get('getupFormImgBase64Top')
			|| !Session.get('getupFormImgBase64Avatar')
			|| form.target[8].value === ''
			|| form.target[9].value === ''
			|| (form.target[10].checked === false
				&& form.target[11].checked === false
				&& form.target[12].checked === false
				&& form.target[13].checked === false
				&& form.target[14].checked === false
				&& form.target[15].checked === false
				&& form.target[16].checked === false) ){
			toastr.warning(
				"Preecha os campos obrigatórios.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[6].value).length > 200){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[7].value).length > 600){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 600.",
				'',
				{"progressBar": true}
			);
		}else{
			var validateDay1 = validateDay2 = validateDay3 = validateDay4 = validateDay5 = validateDay6 = validateDay7 = false;
			var program = Program.find({  // verifica a duplicidade do nome do programa
				name: 			form.target[6].value,
				vehicle_id: 	form.target[1].value,
				category_id: 	form.target[3].value,
				city_id: 		form.target[5].value,
				status: 		1
			}).map(
				function(p) {
					return {
						name: p.name
					};
				}
			)[0];

			if(program === undefined || form.target[6].value !== program.name){

				if(form.target[10].checked){ // verifica o dia da semana segunda
					validateDay1 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_monday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'segunda'
							};
						}
					)[0];
				}

				if(form.target[11].checked){ // verifica o dia da semana terca
					validateDay2 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_tuesday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'terca'
							};
						}
					)[0];
				}

				if(form.target[12].checked){  // verifica o dia da semana quarta
					validateDay3 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_wednesday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'quarta'
							};
						}
					)[0];
				}

				if(form.target[13].checked){  // verifica o dia da semana quinta
					validateDay4 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_thursday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'quinta'
							};
						}
					)[0];
				}

				if(form.target[14].checked){  // verifica o dia da semana sexta
					validateDay5 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_friday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'sexta'
							};
						}
					)[0];
				}

				if(form.target[15].checked){  // verifica o dia da semana sabado
					validateDay6 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_saturday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'sabado'
							};
						}
					)[0];
				}

				if(form.target[16].checked){  // verifica o dia da semana domingo
					validateDay7 = Program.find({
						hour_begin: 	{ $gte: form.target[8].value },
						hour_end: 		{ $lte: form.target[9].value },
						day_sunday: 	1,
						status: 		1
					}).map(
						function(p) {
							return {
								name: 'domingo'
							};
						}
					)[0];
				}

				if((validateDay1 === false || validateDay1 === undefined)
					&& (validateDay2 === false || validateDay2 === undefined)
					&& (validateDay3 === false || validateDay3 === undefined)
					&& (validateDay4 === false || validateDay4 === undefined)
					&& (validateDay5 === false || validateDay5 === undefined)
					&& (validateDay6 === false || validateDay6 === undefined)
					&& (validateDay7 === false || validateDay7 === undefined)){
					Meteor.call(
						'insertProgram',
						[
							111,
							form.target[1].value,
							form.target[3].value,
							form.target[5].value,
							form.target[6].value,
							form.target[7].value,
							form.target[8].value,
							form.target[9].value,
							((form.target[10].checked)? 1 : 0),
							((form.target[11].checked)? 1 : 0),
							((form.target[12].checked)? 1 : 0),
							((form.target[13].checked)? 1 : 0),
							((form.target[14].checked)? 1 : 0),
							((form.target[15].checked)? 1 : 0),
							((form.target[16].checked)? 1 : 0),
							null,
							null,
							Session.get('getupFormImgBase64Avatar'),
							Session.get('getupFormImgBase64Top'),
							((form.target[21].checked)? 1 : 0),
							Meteor.userId2
						],
						function(error, result){
							if(!error){
								//remove os dados dos campos do form para evitar a duplicidade do registro
								form.target[0].value = form.target[1].value = form.target[2].value = form.target[3].value = form.target[4].value = form.target[5].value = form.target[6].value = form.target[7].value = form.target[8].value = form.target[9].value = '';
								form.target[21].checked = form.target[10].checked = form.target[11].checked = form.target[12].checked = form.target[13].checked = form.target[14].checked = form.target[15].checked = form.target[16].checked  = false;
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
				}else{
					toastr.warning(
						'Existe(m) programa(s) com o horario escolhido, para o(s) dia(s) da semana: ' + ((validateDay1 !== false && validateDay1 !== undefined)? validateDay1.name + ' ' : '') + ((validateDay2 !== false && validateDay2 !== undefined)? validateDay2.name + ' ' : '') + ((validateDay3 !== false && validateDay3 !== undefined)? validateDay3.name + ' ': '') + ((validateDay4 !== false && validateDay4 !== undefined)? validateDay4.name + ' ': '') + ((validateDay5 !== false && validateDay5 !== undefined)? validateDay5.name + ' ': '') + ((validateDay6 !== false && validateDay6 !== undefined)? validateDay6.name + ' ': '') + ((validateDay7 !== false && validateDay7 !== undefined)? validateDay7.name + ' ' : ''),
						'',
						{"progressBar": true}
					);
				}
			}else{
				toastr.warning(
					'Existe um outro programa com este nome.',
					'',
					{"progressBar": true}
				);
			}
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