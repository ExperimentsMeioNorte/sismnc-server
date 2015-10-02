// Rota do Programa
Router.route('/rede-meionorte/:_id', {
  fastRender: true,
  layout: 'ApplicationLayout',
  name: 'program',
  yieldRegions: {
    'headerTelevision': {to: 'header'},
    'program': {to: 'program'}
  },
  waitOn: function() {
    Meteor.remote.subscribe('program');
    Meteor.remote.subscribe('content');
    Meteor.remote.subscribe('user');
    Meteor.remote.subscribe('answer');
    Meteor.remote.subscribe('poll');
    Meteor.remote.subscribe('polluser');
  }
});

Template.program.onRendered(function(){

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message-television');
  }, 1000);

  $('ul.tabsTV').tabs();

});

Template.program.onDestroyed(function(){
  document.querySelector('body').classList.remove('show-message-television');
  $('ul.tabsTV').tabs();
});

Template.program.events({

  'click #btn-hide-message, focus #btn-hide-message, click #btn-share-message, focus #btn-share-message': function () {
    document.querySelector('body').classList.remove('show-message-television');
  },

  'click #btn-show-message, focus #btn-show-message': function () {
    document.querySelector('body').classList.add('show-message-television');
  }
});

Template.program.helpers({
  // gera os dados do programa atual
  programs: function(){
    return Program.find(
      {
        _id: Router.current().params._id,
        status: 1
      }
    ).map(
      function(p) {
        return {
          name: p.name,
          day: p.day,
          hour_begin: p.hour_begin,
          hour_end: p.hour_end,
          description: p.description
        };
      }
    );
  },
  // mostra a enquete
  pollActive: function(){
    var poll = Poll.find(
      {
        status: 1,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );

    // validate poll
    if(poll && poll[0] !== undefined){
      var pollUser = PollUser.find(
      {
          status: 1,
          poll_id: poll[0]._id,
          user_id: Meteor.remote.userId()
      }).map(
        function(pu){
          return {
            _id: pu._id
          }
        }
      );

      if(pollUser && pollUser[0] !== undefined){
        document.querySelector('.polls-answers').classList.add('hide');
        document.querySelector('.results-question').classList.remove('hide');
        console.log('A');
      }
    }else{
        document.querySelector('.polls-answers').classList.add('hide');
        document.querySelector('.message-feedback').classList.remove('hide');
        console.log('B');
    }

    return poll;
  },

  // mostra as respostas
  answersActive: function(){
    var poll = Poll.find(
      {
        status: 1,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );

    if(poll && poll[0] !== undefined){
      return Answer.find(
        {
          status: 1,
          poll_id: poll[0]._id
        }
      ).map(
        function(a){
          return {
            _id: a._id,
            description: a.description
          }
        }
      );
    }else{
      return '';
    }
  },
  pollResult: function(){
    return Poll.find(
      {
        status: 1,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );
  },

  // Obs.: para calcular a porcentagem eh realizado uma regra de 3, para saber a porcentagem faltante
  pollResult: function(){
    var poll = Poll.find(
      {
        status: 1,
        program_id: Router.current().params._id
      }
    ).map(
      function(p){
        return {
          _id: p._id,
          description: p.description,
          img: p.img
        }
      }
    );
    if(poll && poll[0] !== undefined){
      var answered = PollUser.findOne(
        {
          status: 1,
          poll_id: poll[0]._id,
          user_id: Meteor.remote.userId()
        }
      );

      if(answered === undefined){
        return null;
      }else{
        var answersResult = total = [];
        var i = porcent = calculoTotal = voto = answerUser = 0;
        beforePorcent = 100;

        // gera o grupo de respostas da enquete
        var group = PollUser.find(
          {
            status: 1,
            poll_id: poll[0]._id
          }
        ).fetch();

        // pega a resposta que o usuario logado respondeu
        for(var x in group){
          if(group[x]['user_id'] === Meteor.remote.userId()){
            answerUser = group[x]['answer_id'];
            break;
          }
        }

        // gera o array das quantidades das respostas
        var groupedAnswerId = _.groupBy(_.pluck(group, 'answer_id'));
        _.each(_.values(groupedAnswerId), function(data) {
          total[i] = data.length;
          i++;

        });

        // pega o total da quantidade das respostas
        for(var x in total){
          calculoTotal += total[x];
        }

        // gera o array da porcentagem de cada resposta e mostra qual o usuario respondeu
        i = 0;
        _.each(_.values(groupedAnswerId), function(data) {
          voto = '';
          if(answerUser === data[i]){
            voto = 'vote';
          }

          porcent = ((data.length * 100) / calculoTotal);
          answersResult[i] = {
            porcent: porcent.toFixed(2),
            description: Answer.findOne(
                {
                  status: 1,
                  _id: data[0]
              },
                {
                  fields: {
                    description: 1
                  }
                }
            ).description,
            voto:voto
          };
          i++;

        });

        return  answersResult
      }
    }else{
      return '';
    }
  }
});
