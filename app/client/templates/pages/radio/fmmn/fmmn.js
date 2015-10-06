// Rota do Meio Norte FM
RadioController = ApplicationController.extend();

Router.route('/fmmeionorte/:_id', {
  name: 'fmmn',
  yieldRegions: {
    'headerFMMN': {to: 'header'}
  },
  waitOn: function() {
    Meteor.remote.subscribe('program');
    Meteor.remote.subscribe('content');
    Meteor.remote.subscribe('user');
    Meteor.remote.subscribe('answer');
    Meteor.remote.subscribe('poll');
    Meteor.remote.subscribe('polluser');
  },
  fastRender: true
});

Template.fmmn.onRendered(function(){

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message-television');
  }, 1000);

  $('ul.tabsTV').tabs();

});

Template.fmmn.onDestroyed(function(){
  document.querySelector('body').classList.remove('show-message-television');
  $('ul.tabsTV').tabs();
});

Template.fmmn.events({

  'click #btn-hide-message, focus #btn-hide-message, click #btn-share-message, focus #btn-share-message': function () {
    document.querySelector('body').classList.remove('show-message-television');
  },

  'click #btn-show-message, focus #btn-show-message': function () {
    document.querySelector('body').classList.add('show-message-television');
  }
});

Template.fmmn.helpers({
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
  }
});