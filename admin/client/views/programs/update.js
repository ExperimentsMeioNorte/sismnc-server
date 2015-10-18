// PROGRAM NEW PAGE
Template.programUpdate.rendered = function () {
	if(Router.current().params._id !== null){
		//preeche o select option de veiculo
		var vehicle = Vehicle.find(
			{
				status:1
			}
		).map(
			function(vehicleData) {
				return [
					vehicleData._id,
					vehicleData.name
				];
			}
		);

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
		Session.set('getupProgramName', this.data.collection._docs['_map'][Router.current().params._id]['name']);
		document.querySelector("#program_name").value = this.data.collection._docs['_map'][Router.current().params._id]['name'];
		document.querySelector("#program_name").className = document.querySelector("#program_name").className + ' valid';
		document.querySelector("#program_label_name").className = ' active';

		// descricao
		if(this.data.collection._docs['_map'][Router.current().params._id]['description']){
			document.querySelector("#program_description").value = this.data.collection._docs['_map'][Router.current().params._id]['description'];
			document.querySelector("#program_description").className = document.querySelector("#program_description").className + ' valid';
			document.querySelector("#program_label_description").className = ' active';
		}

		// horas
		if(this.data.collection._docs['_map'][Router.current().params._id]['hour_begin']){
			document.querySelector("#program_hour_begin").value = this.data.collection._docs['_map'][Router.current().params._id]['hour_begin'];
			document.querySelector("#program_hour_end").value = this.data.collection._docs['_map'][Router.current().params._id]['hour_end'];
			document.querySelector("#program_hour_begin").className = document.querySelector("#program_hour_begin").className + ' valid';
			document.querySelector("#program_label_hour_begin").className = ' active';
		}

		/*// facebook
		if(this.data.collection._docs['_map'][Router.current().params._id]['facebook_url']){
			document.querySelector("#social_facebook").value = this.data.collection._docs['_map'][Router.current().params._id]['facebook_url'];
			document.querySelector("#social_facebook").className = document.querySelector("#social_facebook").className + ' valid';
			document.querySelector("#social_label_facebook").className = ' active';
		}

		// google
		if(this.data.collection._docs['_map'][Router.current().params._id]['google_url']){
			document.querySelector("#social_google").value = this.data.collection._docs['_map'][Router.current().params._id]['google_url'];
			document.querySelector("#social_google").className = document.querySelector("#social_google").className + ' valid';
			document.querySelector("#social_label_google").className = ' active';
		}*/

		document.querySelector("#topo_upload").src = this.data.collection._docs['_map'][Router.current().params._id]['image_folder'];
		document.querySelector("#avatar_upload").src = this.data.collection._docs['_map'][Router.current().params._id]['image_avatar'];
		document.querySelector("#program_status").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['status'] === 1)? true : false);

		// dia da semana
		Session.set('getupProgramMonday', this.data.collection._docs['_map'][Router.current().params._id]['day_monday']);
		Session.set('getupProgramTuesday', this.data.collection._docs['_map'][Router.current().params._id]['day_tuesday']);
		Session.set('getupProgramWednesday', this.data.collection._docs['_map'][Router.current().params._id]['day_wednesday']);
		Session.set('getupProgramThursday', this.data.collection._docs['_map'][Router.current().params._id]['day_thursday']);
		Session.set('getupProgramFriday', this.data.collection._docs['_map'][Router.current().params._id]['day_friday']);
		Session.set('getupProgramSaturday', this.data.collection._docs['_map'][Router.current().params._id]['day_saturday']);
		Session.set('getupProgramSunday', this.data.collection._docs['_map'][Router.current().params._id]['day_sunday']);

		document.querySelector("#day_monday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_monday'] === 1)? true : false);
		document.querySelector("#day_tuesday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_tuesday'] === 1)? true : false);
		document.querySelector("#day_wednesday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_wednesday'] === 1)? true : false);
		document.querySelector("#day_thursday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_thursday'] === 1)? true : false);
		document.querySelector("#day_friday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_friday'] === 1)? true : false);
		document.querySelector("#day_saturday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_saturday'] === 1)? true : false);
		document.querySelector("#day_sunday").checked = ((this.data.collection._docs['_map'][Router.current().params._id]['day_sunday'] === 1)? true : false);

		Session.set(
			'getupFormImgBase64Top',
			this.data.collection._docs['_map'][Router.current().params._id]['image_folder']
		);
		Session.set(
			'getupFormImgBase64Avatar',
			this.data.collection._docs['_map'][Router.current().params._id]['image_avatar']
		);
	}

	VMasker(this.find("[data-vm-mask-hour-begin]")).maskPattern("99:99");
	VMasker(this.find("[data-vm-mask-hour-end]")).maskPattern("99:99");
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
		if(form.target[1].value === ''
			|| form.target[3].value === ''
			|| form.target[4].value === ''
			|| !Session.get('getupFormImgBase64Top')
			|| !Session.get('getupFormImgBase64Avatar')
			|| form.target[6].value === ''
			|| form.target[7].value === ''
			|| (form.target[8].checked === false
				&& form.target[9].checked === false
				&& form.target[10].checked === false
				&& form.target[11].checked === false
				&& form.target[12].checked === false
				&& form.target[13].checked === false
				&& form.target[14].checked === false) ){
			toastr.warning(
				"Preecha os campos obrigatórios.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[4].value).length > 200){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[5].value).length > 600){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 600.",
				'',
				{"progressBar": true}
			);
		}else{
			var validateDay1 = validateDay2 = validateDay3 = validateDay4 = validateDay5 = validateDay6 = validateDay7 = false;
			if(Session.get('getupProgramName') !== form.target[4].value){
				var program = Program.find({  // verifica a duplicidade do nome do programa
					name: 			{ $ne: form.target[4].value },
					vehicle_id: 	form.target[1].value,
					category_id: 	form.target[3].value,
					status: 		1
				}).map(
					function(p) {
						return {
							name: p.name
						};
					}
				)[0];
			}else{
				program = true;
			}

			if(program === undefined || form.target[4].value !== program.name){

				if(form.target[8].checked && Session.get('getupProgramMonday') !== 1){ // verifica o dia da semana segunda
					validateDay1 = Program.find({
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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

				if(form.target[9].checked && Session.get('getupProgramTuesday') !== 1){ // verifica o dia da semana terca
					validateDay2 = Program.find({
						name: { $gte: form.target[6].value },
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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

				if(form.target[10].checked && Session.get('getupProgramWednesday') !== 1){  // verifica o dia da semana quarta
					validateDay3 = Program.find({
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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

				if(form.target[11].checked && Session.get('getupProgramThursday') !== 1){  // verifica o dia da semana quinta
					validateDay4 = Program.find({
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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

				if(form.target[12].checked && Session.get('getupProgramFriday') !== 1){  // verifica o dia da semana sexta
					validateDay5 = Program.find({
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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

				if(form.target[13].checked && Session.get('getupProgramSaturday') !== 1){  // verifica o dia da semana sabado
					validateDay6 = Program.find({
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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

				if(form.target[14].checked && Session.get('getupProgramSunday') !== 1){  // verifica o dia da semana domingo
					validateDay7 = Program.find({
						hour_begin: 	{ $gte: form.target[6].value },
						hour_end: 		{ $lte: form.target[7].value },
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
						'updateProgram',
						[
							222,
							form.target[1].value,
							form.target[3].value,
							form.target[4].value,
							form.target[5].value,
							form.target[6].value,
							form.target[7].value,
							((form.target[8].checked)? 1 : 0),
							((form.target[9].checked)? 1 : 0),
							((form.target[10].checked)? 1 : 0),
							((form.target[11].checked)? 1 : 0),
							((form.target[12].checked)? 1 : 0),
							((form.target[13].checked)? 1 : 0),
							((form.target[14].checked)? 1 : 0),
							null,
							null,
							Session.get('getupFormImgBase64Avatar'),
							Session.get('getupFormImgBase64Top'),
							((form.target[19].checked)? 1 : 0),
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