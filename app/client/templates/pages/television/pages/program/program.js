// Rota do Programa
Router.route('/rede-meionorte/programa/:_id', {
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
  },
  data: function(){
    return Program.findOne({_id:this.params._id});
  }
});

Template.program.onRendered(function(){
  //console.log(Router.current().data());

  // preenche as descricoes do programa
  document.querySelector(".title").innerHTML = Router.current().data()['name'];
  document.querySelector("#programDias").innerHTML = Router.current().data()['day'];
  document.querySelector("#programHoraInicial").innerHTML = Router.current().data()['hour_begin'];
  document.querySelector("#programHoraFinal").innerHTML = Router.current().data()['hour_end'];
  document.querySelector(".program-description").innerHTML = Router.current().data()['description'];

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message-television');
  }, 1000);

  $('ul.tabsTV').tabs();

  // limite de visualizacoes na paginacao
  Session.set('limit', 5);
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

Template.playTvLayout.helpers({
  // mostra a televisao
  playTvValidate: function(){
    return Meteor.playTv(Router.current().data()['hour_begin'], Router.current().data()['hour_end']);;
  }
});