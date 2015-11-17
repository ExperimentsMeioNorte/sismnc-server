Template.city.helpers({
	'city': function(){
    	return City.find({}).map(
    		function(c) {
    			return {
    				_id:c._id,
    				name:c.name,
                    status: ((c.status === 1)? 'Ativado' : 'Desativado')
    			};
    		}
		);
	},

    'admin': function(){
        return (Meteor.userLevel !== undefined && Meteor.userLevel !== '2')? false : true;
    }
});

Template.city.events({
	'click #btnDelete': function(form){
		toastr.warning(
			"Deseja realmente desativar a cidade?<br /><span class=\"btn clear\" onclick=\"Meteor.call('disableCity', [333, '"+form.currentTarget.childNodes[1].value+"', Meteor.userId2]); $('#toast-container').remove();\">Ok</span><span class=\"btn clear\" onclick=\"$('#toast-container').remove()\">Cancelar</span>",
			'',
			{
				"tapToDismiss": false,
				"timeOut": 0,
				"extendedTimeOut": 0
			}
		);
	}
});