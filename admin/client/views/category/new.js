// CATEGORY NEW PAGE
Template.categoryNew.events({
	'submit #categoryForm': function(form){
		form.preventDefault();
		if(form.target[0].value === ''){
			toastr.warning(
				"Preecha os campos obrigatórios.",
				'',
				{"progressBar": true}
			);
		}else if((form.target[0].value).length > 200){
			toastr.warning(
				"rum, o campo descricao ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else{
			Meteor.call(
				'insertCategory',
				[
					111,
				    form.target[0].value,
				    (form.target[1].checked)? 1 : 0,
			        Meteor.userId2
				],
				function(error, result){
					if(!error){
						//remove os dados dos campos do form para evitar a duplicidade do registro
						form.target[0].value = '';
						form.target[1].checked = false;

						Router.go('category');

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
	}
});