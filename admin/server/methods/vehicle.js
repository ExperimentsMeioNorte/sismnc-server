Meteor.methods({
  /*
    data[0] = 111 (obrigatorio)
    data[1] = nome (obrigatorio)
    data[2] = descricao (obrigatorio)
    data[3] = imagem de avatar (obrigatorio)
    data[4] = url do banco de dados externo
    data[5] = *status (default: 1)

    * status:
      0 = inativo
      1 = ativo
  */
  'insertVehicle': function(data){
    var msgError = '';
    if(data[0] !== 111){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[4]){
      msgError = Meteor.call('msgFeedback', 'error', '003');
    }

    if(!msgError){
      Vehicle.insert(
        {
          name: data[1],
          description: data[2],
          feed_url:data[3],
          image_avatar:data[4],
          status:data[5],
          user_record:data[6],
          user_change:data[6],
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
    data[0] = 222 (obrigatorio)
    data[1] = nome (obrigatorio)
    data[2] = descricao (obrigatorio)
    data[3] = imagem de avatar (obrigatorio)
    data[4] = url do banco de dados externo
    data[5] = *status (default: 1)
    data[6] = id do veiculo (obrigatorio)

    * status:
      0 = inativo
      1 = ativo
  */
  'updateVehicle': function(data){
    var msgError = '';
    if(data[0] !== 222){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[4]){
      msgError = Meteor.call('msgFeedback', 'error', '003');
    }else if(!data[6]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' veiculo.';
    }

    if(!msgError){
        Vehicle.update(
          {_id:data[6]},
          {$set:
            {
              name: data[1],
              description: data[2],
              feed_url:data[3],
              image_avatar:data[4],
              status:data[5],
              user_change:data[7],
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
    data[1] = id do veiculo (obrigatorio)
  */
  'disableVehicle': function(data){
    var msgError = '';
    if(data[0] !== 333){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' instituição.';
    }

    if(!msgError){
      Vehicle.update(
        {_id:data[1]},
        {$set:
          {
            status:0,
            user_change:data[2],
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