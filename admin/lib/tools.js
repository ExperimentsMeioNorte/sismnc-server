updateDateRecord = function(){
	var dateRecords = Session.get('getupDateRecods');
	for(var i in dateRecords){
		Meteor.call('timeCompare', dateRecords[i].date_record, function(error, result){
			Session.set('getupToolTimeCompare' + dateRecords[i]._id, result);
		});
	}
}

// limite da hora inicial e final para mostrar as mensagens na timeline
Meteor.getDateHour = function(){
    Meteor.call(
    'dateNow',
        function(error, result){
            Session.set('getupDateBegin', result['dateBegin']);
            Session.set('getupDateEnd', result['dateEnd']);
        }
    );
}

incrementLimit = function(inc) {
  	Session.set(
  		'limit',
  		(Session.get('limit') + ((inc === undefined)? 5 : inc))
	);
}