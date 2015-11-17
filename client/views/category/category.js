Template.category.helpers({
	'category': function(){
    	return Category.find({description: { $not: 'Radio' }}).map(
    		function(p) {
    			return {
    				_id:p._id,
    				description:p.description,
                    status: ((p.status === 1)? 'Ativado' : 'Desativado')
    			};
    		}
		);
	},

    'admin': function(){
        return (Meteor.userLevel !== undefined && Meteor.userLevel !== '2')? false : true;
    }
});

Template.category.events({
	'click #btnDelete': function(form){
		toastr.warning(
			"Deseja realmente desativar a categoria?<br /><span class=\"btn clear\" onclick=\"Meteor.call('disableCategory', [333, '"+form.currentTarget.childNodes[1].value+"', Meteor.userId2]); $('#toast-container').remove();\">Ok</span><span class=\"btn clear\" onclick=\"$('#toast-container').remove()\">Cancelar</span>",
			'',
			{
				"tapToDismiss": false,
				"timeOut": 0,
				"extendedTimeOut": 0
			}
		);
	}
});