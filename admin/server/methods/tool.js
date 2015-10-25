Meteor.methods({
	'routerGO': function(path){
		router.go(path);
	},

	// a data no javascript/mongodb é UTC, iremos adaptar para Brasil/Teresina
 	'dateNow': function(){
	   	var dateObj = new Date();

	   	// define o mes atual no servidor
	   	var month = (dateObj.getMonth() + 1);

	    return {
	    	dateBegin: dateObj.getDate() + '/' + month + '/' + dateObj.getFullYear() + ' 0:0:0',
	    	dateEnd: (dateObj.getDate() + 1) + '/' + month + '/' + dateObj.getFullYear() + ' 0:0:1',
	    	dateNow: dateObj.getDate() + '/' + month + '/' + dateObj.getFullYear() + ' ' + dateObj.getHours() + ':' +  dateObj.getMinutes() + ':' + dateObj.getSeconds()
	    };
 	},

 // 	'timeCompare': function(dateTime){
 // 		var timeCompared = calc = undefined;
	// 	var dtB = new Date();
	//
	// 	dtA_config = dateTime.split(' ');
	// 	dtA_date = dtA_config[0].split('/');
	// 	dtA_hour = dtA_config[1].split(':');
	//
	// 	if(dtB.getFullYear() > dtA_date[2]){
	// 		calc = (dtB.getFullYear() - dtA_date[2]);
	// 		timeCompared = calc + ' ano' + ((calc > 1)? 's ' : ' ');
	// 	}else if(dtB.getMonth() > dtA_date[1]){
	// 		calc = (dtB.getMonth() - dtA_date[1]);
	// 		timeCompared = calc + ' m' + ((calc > 1)? 'eses ' : 'ês ');
	// 	}else if(dtB.getDate() > dtA_date[0]){
	// 		calc = (dtB.getDate() - dtA_date[0]);
	// 		timeCompared = calc + ' dia' + ((calc > 1)? 's ' : ' ');
	// 	}else if(dtB.getHours() > dtA_hour[0]){
	// 		calc = (dtB.getHours() - dtA_hour[0]);
	// 		timeCompared = calc + ' hora' + ((calc > 1)? 's ' : ' ');
	// 	}else if(dtB.getMinutes() > dtA_hour[1]){
	// 		calc = (dtB.getMinutes() - dtA_hour[1]);
	// 		timeCompared = calc + ' minuto' + ((calc > 1)? 's ' : ' ');
	// 	}else if(dtB.getSeconds() > dtA_hour[2]){
	// 		calc = (dtB.getSeconds() - dtA_hour[2]);
	// 		timeCompared = calc + ' segundo' + ((calc > 1)? 's ' : ' ');
	// 	}else{
	// 		timeCompared = '10 milissegundos';
	// 	}
	//
	// 	return timeCompared;
 // 	},

 'timeCompare': function(dateTime){
	 var timeCompared = calc = undefined;
	 var dtB = new Date();

	 dtA_config = dateTime.split(' ');
	 dtA_date = dtA_config[0].split('/');
	 dtA_hour = dtA_config[1].split(':');

	 if(dtB.getFullYear() > dtA_date[2]){
		 calc = (dtB.getFullYear() - dtA_date[2]);
		 timeCompared = calc + ' ano' + ((calc > 1)? '' : '');
	 }else if(dtB.getMonth() > dtA_date[1]){
		 calc = (dtB.getMonth() - dtA_date[1]);
		 timeCompared = calc + ' m' + ((calc > 1)? '' : '');
	 }else if(dtB.getDate() > dtA_date[0]){
		 calc = (dtB.getDate() - dtA_date[0]);
		 timeCompared = calc + ' d' + ((calc > 1)? '' : '');
	 }else if(dtB.getHours() > dtA_hour[0]){
		 calc = (dtB.getHours() - dtA_hour[0]);
		 timeCompared = calc + ' h' + ((calc > 1)? '' : '');
	 }else if(dtB.getMinutes() > dtA_hour[1]){
		 calc = (dtB.getMinutes() - dtA_hour[1]);
		 timeCompared = calc + ' min' + ((calc > 1)? '' : '');
	 }else if(dtB.getSeconds() > dtA_hour[2]){
		 calc = (dtB.getSeconds() - dtA_hour[2]);
		 timeCompared = calc + ' s' + ((calc > 1)? '' : '');
	 }else{
		 timeCompared = 'Agora';
	 }

	 return timeCompared;
 },

 	msgFeedback: function(type, code){
	    var msg = {
	        'error': {
	            '000': 'Conteúdo inválido.',
	            '001': 'Necessário conter o nome.',
	            '002': 'Necessário conter a descrição.',
	            '003': 'Necessário conter a imagem de avatar.',
	            '004': 'Necessário conter a imagem de folder',
	            '005': 'Necessário conter o ID do conteúdo.',
	            '006': 'Necessário conter a mensagem.',
	            '007': 'Necessário conter o status.',
	            '008': 'Necessário conter email/senha ou rede social.',
	            '009': 'Necessário conter um programa.',
	            '010': 'Necessário conter pelo menos um dia da semana.'
	        },

	        'sucess': {
	            '000': 'Registro efetuado com sucesso.',
	            '001': 'Atualização efetuada com sucesso.',
	            '002': 'Remoção efetuada com sucesso.'
	        }
        };

	    return msg[type][code];
	}

});
