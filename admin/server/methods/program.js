Meteor.methods({
  /*
    data[0] = 111 (obrigatorio)
    data[1] = id do veiculo (obrigatorio)
    data[2] = id da categoria (obrigatorio)
    data[3] = nome (obrigatorio)
    data[4] = descricao
    dats[5] = hora inicial em que o programa é visto (obrigatorio)
    dats[6] = hora final em que o programa é visto (obrigatorio)
    data[7] = dia da semana segunda (> obrigatorio)
    data[8] = dia da semana terca
    data[9] = dia da semana quarta
    data[10] = dia da semana quinta
    data[11] = dia da semana sexta
    data[12] = dia da semana sabado
    data[13] = dia da semana domingo (< obrigatorio)
    data[14] = url do facebook
    data[15] = url do google
    data[16] = imagem avatar (obrigatorio)
    data [17] = imagem topo (obrigatorio)
    data[18] = *status (default: 1)

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
    }else if(!data[7]
      && !data[8]
      && !data[9]
      && !data[10]
      && !data[11]
      && !data[12]
      && !data[13]){
      msgError = Meteor.call('msgFeedback', 'error', '010');
    }else if(!data[16]){
      msgError = Meteor.call('msgFeedback', 'error', '003');
    }else if(!data[17]){
      msgError = Meteor.call('msgFeedback', 'error', '004');
    }

    if(!msgError){
      Program.insert(
        {
          vehicle_id:       data[1],
          category_id:      data[2],
          name:             data[3],
          description:      data[4],
          hour_begin:       data[5],
          hour_end:         data[6],
          day_monday:       data[7],
          day_tuesday:      data[8],
          day_wednesday:    data[9],
          day_thursday:     data[10],
          day_friday:       data[11],
          day_saturday:     data[12],
          day_sunday:       data[13],
          facebook_url:     data[14],
          google_url:       data[15],
          image_avatar:     data[16],
          image_folder:     data[17],
          status:           data[18],
          user_record:      data[19],
          user_change:      data[19],
          date_record:      Meteor.call('dateNow')['dateNow'],
          date_change:      Meteor.call('dateNow')['dateNow']
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
    dats[5] = hora inicial em que o programa é visto (obrigatorio)
    dats[6] = hora final em que o programa é visto (obrigatorio)
    data[7] = dia da semana segunda (> obrigatorio)
    data[8] = dia da semana terca
    data[9] = dia da semana quarta
    data[10] = dia da semana quinta
    data[11] = dia da semana sexta
    data[12] = dia da semana sabado
    data[13] = dia da semana domingo (< obrigatorio)
    data[14] = url do facebook
    data[15] = url do google
    data[16] = imagem avatar (obrigatorio)
    data [17] = imagem topo (obrigatorio)
    data[18] = *status (default: 1)
    data[19] =  id do programa (obrigatorio)

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
    }else if(!data[7]
      && !data[8]
      && !data[9]
      && !data[10]
      && !data[11]
      && !data[12]
      && !data[13]){
      msgError = Meteor.call('msgFeedback', 'error', '010');
    }else if(!data[16]){
      msgError = Meteor.call('msgFeedback', 'error', '003');
    }else if(!data[17]){
      msgError = Meteor.call('msgFeedback', 'error', '004');
    }else if(!data[19]){
      msgError = Meteor.call('msgFeedback', 'error', '005') + ' programa';
    }

    if(!msgError){
      Program.update(
        {_id:data[19]},
        {$set:
          {
            vehicle_id:       data[1],
            category_id:      data[2],
            name:             data[3],
            description:      data[4],
            hour_begin:       data[5],
            hour_end:         data[6],
            day_monday:       data[7],
            day_tuesday:      data[8],
            day_wednesday:    data[9],
            day_thursday:     data[10],
            day_friday:       data[11],
            day_saturday:     data[12],
            day_sunday:       data[13],
            facebook_url:     data[14],
            google_url:       data[15],
            image_avatar:     data[16],
            image_folder:     data[17],
            status:           data[18],
            user_record:      data[20],
            user_change:      data[20],
            date_record:      Meteor.call('dateNow')['dateNow'],
            date_change:      Meteor.call('dateNow')['dateNow']
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
            date_change:Meteor.call('dateNow')['dateNow']
          }
        }
      );

      return Meteor.call('msgFeedback', 'sucess', '002');
    }else{
      throw new Meteor.Error(500, msgError);
    }
  }

});