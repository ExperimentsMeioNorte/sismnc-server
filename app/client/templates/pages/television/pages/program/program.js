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
  },
  data: function(){
    return Program.findOne({_id:this.params._id});
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
  programTitle: function(){
    return Router.current().data()['name'];
  },
  programDay: function(){
    return Router.current().data()['day'];
  },
  programHourBegin: function(){
    return Router.current().data()['hour_begin'];
  },
  programHourEnd: function(){
    return Router.current().data()['hour_end'];
  },
  programDescription: function(){
    return Router.current().data()['description'];
  }
})
