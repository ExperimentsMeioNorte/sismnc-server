// CATEGORY UPDATE PAGE
Template.categoryUpdate.onRendered(function(){
	if(Router.current().params._id !== null){
		//preenche os campos
		document.querySelector("#category_description").value = this.data.collection._docs['_map'][Router.current().params._id]['description'];
		document.querySelector("#category_img_description").className = document.querySelector("#category_img_description").className + ' valid active';
		document.querySelector("#category_description").className = document.querySelector("#category_description").className + ' valid';
		document.querySelector("#category_label_description").className = ' active';

		document.querySelector("#category_status").checked = (this.data.collection._docs['_map'][Router.current().params._id]['status'] === 1)? true : false;
	}
});

Template.categoryUpdate.events({
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
				"rum, o campo nome ultrapassou o limite de caracteres, somente possivel 200.",
				'',
				{"progressBar": true}
			);
		}else{
			Meteor.call(
				'updateCategory',
				[
					222,
				    form.target[0].value,
			        (form.target[1].checked)? 1 : 0,
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
	}
});