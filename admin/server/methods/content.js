Meteor.methods({
  /*
    data[0] = 111 (obrigatorio)
    data[1] = ID do programa (obrigatorio)
    data[2] = ID do usuario (obrigatorio)
    data[3] = texto (obrigatorio somente se nao tiver imagem ou video)
    data[4] = imagem
    data[5] = video
    data[6] = *status (default: 1)

    * status:
      0 = inativo
      1 = ativo
  */
	'insertContent': function(data){
    var msgError = '';
    if(data[0] !== 111){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[3]){
      msgError = Meteor.call('msgFeedback', 'error', '006');
    }

    if(!msgError){
    	Content.insert(
    		{
    			program_id:data[1],
    			user_id:data[2],
    			text:data[3],
    			img:data[4],
          video:data[5],
          status:data[6],
    			date_record:Meteor.call('dateNow'),
    			date_change:Meteor.call('dateNow')
    		}
  		);

      return Meteor.call('msgFeedback', 'sucess', '000');
    }else{
      throw new Meteor.Error(500, msgError);
    }
	},

  /*
    data[0] = 111 (obrigatorio)
    data[1] = ID do programa (obrigatorio)
    data[2] = ID do usuario (obrigatorio)
    data[3] = texto (obrigatorio somente se nao tiver imagem ou video)
    data[4] = imagem
    data[5] = video
    data[6] = *status (default: 1)
    data[7] = id da mensagem (obrigatorio)

    * status:
      0 = inativo
      1 = ativo
  */
  'updateContent': function(data){
    var msgError = '';
    if(data[0] !== 222){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[3]){
      msgError = Meteor.call('msgFeedback', 'error', '006');
    }else if(!data[7]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' mensagem.';
    }

    if(!msgError){
      Content.update(
        {_id:data[7]},
        {$set:
          {
            program_id:data[1],
            user_id:data[2],
            text:data[3],
            img:data[4],
            video:data[5],
            status:data[6],
            date_change:Meteor.call('dateNow')
          }
        }
      );

      return Meteor.call('msgFeedback', 'sucess', '001');
    }else{
      throw new Meteor.Error(500, msgError);
    }
  },

  /*
    data[0] = 333 (obrigatorio)
    data[1] = id da mensagem (obrigatorio)
  */
	'disableContent': function(data){
    var msgError = '';
    if(data[0] !== 333){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' mensagem.';
    }

		if(data[0] === 333){
      Content.update(
        {_id:data[1]},
        {$set:
          {
            status:0,
            date_change:Meteor.call('dateNow')
          }
        }
      );
      return Meteor.call('msgFeedback', 'sucess', '002');
    }else{
      throw new Meteor.Error(500, msgError);
    }
	}
});