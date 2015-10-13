Meteor.methods({
  /*
    data[0] = 111 (obrigatorio)
    data[1] = id do programa (obrigatorio)
    data[2] = id do usuario (obrigatorio)
    data[3] = texto do pedido (obrigatorio)
  */
  'insertMusic': function(data){
    var msgError = '';
    if(data[0] !== 111){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' programa';
    }else if(!data[2]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' usuario';
    }else if(!data[3]){
      msgError = Meteor.call('msgFeedback', 'error', '002');
    }

    if(!msgError){
      Program.insert(
        {
          program_id: data[1],
          user_id: data[2],
          text:data[3],
          user_record:data[2],
          date_record:Meteor.call('dateNow')
        }
      );

      return Meteor.call('msgFeedback', 'sucess', '000');
    }else{
      throw new Meteor.Error(500, msgError);
    }
  }

});