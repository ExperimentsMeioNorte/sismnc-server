Template.userUpdate.rendered = function(){
	var activeSelected = '';
	var user_id = Router.current().params._id;
	if(user_id !== null){

		Session.set(
			'getupFormPassword',
			this.data.collection._docs['_map'][user_id]['password']
		);

		document.querySelector("#user_status").checked = this.data.collection._docs['_map'][user_id]['status'];
		document.querySelector("#user_id").value = this.data.collection._docs['_map'][user_id]['_id'];
		document.querySelector("#user_name").value = this.data.collection._docs['_map'][user_id]['name'];
		document.querySelector("#user_email").value = this.data.collection._docs['_map'][user_id]['email'];
		document.querySelector("#avatar_upload").src = document.querySelector("#avatar_imgBase64").src = this.data.collection._docs['_map'][user_id]['avatar'];

		document.querySelector("#program").style.display = 'none';
		if(this.data.collection._docs['_map'][user_id]['level'] === '1'){
			document.querySelector("#program").style.display = 'initial';
		}

		//preeche o select option de programa
		var levels = Level.find().map(function(a) {
			return [
				a.level,
				a.description
			];
		});

		for(var i in levels){
			activeSelected = (this.data.collection._docs['_map'][user_id]['level'] === levels[i][0])? ['active', 'selected'] : ['',''];

			$("#user_nivel").append("<option value=\""+levels[i][0]+"\" "+activeSelected[1]+">"+levels[i][1]+"<option/>");
			$(".dropdown-content").append("<li class=\""+activeSelected[0]+"\"><span>"+levels[i][1]+"</span></li>");
		}

		//preeche o select option de programa
		var programs = Program.find().map(function(a) {
			return [
				a._id,
				a.name
			];
		});

		for(var x in programs){
			activeSelected = (this.data.collection._docs['_map'][user_id]['program_id'] === programs[x][0])? ['active', 'selected'] : ['',''];

			$("#user_program").append("<option value=\""+programs[x][0]+"\" "+activeSelected[1]+">"+programs[x][1]+"<option/>");
			$(".dropdown-content").append("<li class=\""+activeSelected[0]+"\"><span>"+programs[x][1]+"</span></li>");
		}


		$('select').material_select();
	}
}

Template.userUpdate.events({
	'change #user_nivel': function(form){
		document.querySelector("#program").style.display = (form.target.selectedIndex === 3)? 'block' : 'none';
	},

	'submit #userForm': function(form){
		form.preventDefault();
		if(form.target[1].value === ''
			|| form.target[2].value === ''
			|| form.target[5].value === ''
			|| (form.target[7].value === '' && form.target[5].value === '1')){
			toastr.warning(
				"Preecha os campos obrigatórios.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[1].value).length > 200 || (form.target[2].value).length > 200 || (form.target[3].value).length > 200){
			toastr.warning(
				"rum, ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else if(form.target[5].value === 1 && !form.target[7].value){
			toastr.warning(
				"rum, Necessario escolher um programa.",
				'',
				{"progressBar": true}
			);
		}else{
			Meteor.call(
				'updateUser',
				[
					222,
					form.target[5].value,
					form.target[1].value,
					Session.get('getupFormImgBase64Avatar'),
					form.target[2].value,
					(form.target[3].value !== '')? form.target[3].value : Session.get('getupFormPassword'),
					null,
		    		null,
		    		form.target[7].value,
		    		((form.target[10].value)? 1 : 0),
		    		form.target[0].value,
		    		Meteor.userId2
				]
			);

			toastr.success(
				"Usuário atualizado com sucesso.",
				'',
				{"progressBar": true}
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