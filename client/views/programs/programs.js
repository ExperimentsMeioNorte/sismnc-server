Template.programs.helpers({
	'programs': function(){
    	return Program.find({}).map(
    		function(p) {
    			return {
    				_id:p._id,
    				name:p.name,
    				image_avatar:p.image_avatar,
            status: ((p.status === 1)? 'Ativado' : 'Desativado')
    			};
    		}
		);
	},

    'admin': function(){
        return (Meteor.userLevel !== undefined && Meteor.userLevel !== '2')? false : true;
    }
});

Template.programs.events({
	'click #btnDelete': function(form){
		toastr.warning(
			"Deseja realmente desativar o programa?<br /><span class=\"btn clear\" onclick=\"Meteor.call('disableProgram', [333, '"+form.currentTarget.childNodes[1].value+"'], Meteor.userId2); $('#toast-container').remove();\">Ok</span><span class=\"btn clear\" onclick=\"$('#toast-container').remove()\">Cancelar</span>",
			'',
			{
				"tapToDismiss": false,
				"timeOut": 0,
				"extendedTimeOut": 0
			}
		);
	}
});