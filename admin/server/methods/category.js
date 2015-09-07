Meteor.methods({
  /*
    data[0] = 111 (obrigatorio)
    data[1] = descricao (obrigatorio)
    data[2] = *status (default: 1)

    * status:
      0 = inativo
      1 = ativo
  */
  'insertCategory': function(data){
    var msgError = '';
    if(data[0] !== 111){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '002');
    }

    if(!msgError){
      Category.insert(
        {
          description: data[1],
          status:data[2],
          user_record:data[3],
          user_change:data[3],
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
    data[1] = descricao (obrigatorio)
    data[2] = *status (default: 1)
    data[3] = id da categoria (obrigatorio)

    * status:
      0 = inativo
      1 = ativo
  */
  'updateCategory': function(data){
    var msgError = '';
    if(data[0] !== 222){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '002');
    }else if(!data[3]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' categoria.';
    }

    if(!msgError){
        Category.update(
          {_id:data[3]},
          {$set:
            {
              description: data[1],
              status:data[2],
              user_change:data[4],
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
    data[1] = id da categoria (obrigatorio)
  */
  'disableCategory': function(data){
    var msgError = '';
    if(data[0] !== 333){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' instituição.';
    }

    if(!msgError){
      Category.update(
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