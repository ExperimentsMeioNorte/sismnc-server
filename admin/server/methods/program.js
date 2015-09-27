Meteor.methods({
  /*
    data[0] = 111 (obrigatorio)
    data[1] = id do veiculo (obrigatorio)
    data[2] = id da categoria (obrigatorio)
    data[3] = nome (obrigatorio)
    data[4] = descricao
    dats[5] = hora inicial em que o programa é visto
    dats[6] = hora final em que o programa é visto
    data[7] = dia da semana em que o programa é visto
    data[8] = url do facebook
    data[9] = url do google
    data[10] = imagem avatar (obrigatorio)
    data [11] = imagem topo (obrigatorio)
    data[12] = *status (default: 1)

    * status:
      0 = inativo
      1 = ativo
  */
  'insertProgram': function(data){
    var msgError = '';
    if(data[0] !== 111){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' veiculo';
    }else if(!data[2]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' categoria';
    }else if(!data[3]){
      msgError = Meteor.call('msgFeedback', 'error', '001');
    }else if(!data[10]){
      msgError = Meteor.call('msgFeedback', 'error', '003');
    }else if(!data[11]){
      msgError = Meteor.call('msgFeedback', 'error', '004');
    }

    if(!msgError){
      Program.insert(
        {
          vehicle_id: data[1],
          category_id: data[2],
          name:data[3],
          description:data[4],
          hour_begin:data[5],
          hour_end:data[6],
          day:data[7],
          facebook_url:data[8],
          google_url:data[9],
          image_avatar:data[10],
          image_folder:data[11],
          status:data[12],
          user_record:data[13],
          user_change:data[13],
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
    data[1] = id do veiculo (obrigatorio)
    data[2] = id da categoria (obrigatorio)
    data[3] = nome (obrigatorio)
    data[4] = descricao
    dats[5] = hora inicial em que o programa é visto
    dats[6] = hora final em que o programa é visto
    data[7] = dia da semana em que o programa é visto
    data[8] = url do facebook
    data[9] = url do google
    data[10] = imagem avatar (obrigatorio)
    data [11] = imagem topo (obrigatorio)
    data[12] = *status (default: 1)
    data[14] =  id do programa (obrigatorio)
    * status:
      0 = inativo
      1 = ativo
  */
  'updateProgram': function(data){
    var msgError = '';
    if(data[0] !== 222){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' veiculo';
    }else if(!data[2]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' categoria';
    }else if(!data[3]){
      msgError = Meteor.call('msgFeedback', 'error', '001');
    }else if(!data[19]){
      msgError = Meteor.call('msgFeedback', 'error', '003');
    }else if(!data[11]){
      msgError = Meteor.call('msgFeedback', 'error', '004');
    }else if(!data[14]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' programa';
    }

    if(!msgError){
      Program.update(
        {_id:data[14]},
        {$set:
          {
            vehicle_id: data[1],
            category_id: data[2],
            name:data[3],
            description:data[4],
            hour_begin:data[5],
            hour_end:data[6],
            day:data[7],
            facebook_url:data[8],
            google_url:data[9],
            image_avatar:data[10],
            image_folder:data[11],
            status:data[12],
            user_record:data[13],
            user_change:data[13],
            date_record:Meteor.call('dateNow'),
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
    data[1] =  id do programa (obrigatorio)
  */
  'disableProgram': function(data){
    var msgError = '';
    if(data[0] !== 333){
      msgError = Meteor.call('msgFeedback', 'error', '000');
    }else if(!data[1]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' programa.';
    }

    if(!msgError){
      Program.update(
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