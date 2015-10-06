// Rota do Programa
RadioController = ApplicationController.extend();

Router.route('/boafm/:_id', {
  name: 'boafm',
  yieldRegions: {
    'headerBOAFM': {to: 'header'}
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

Template.boafm.onRendered(function(){

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message-television');
  }, 1000);

  $('ul.tabs').tabs();

  /*$('.modal-trigger').leanModal({
    dismissible: true,
    opacity:1,
    in_duration: 300,
    out_duration: 200,
    ready: function() {

    },
    complete: function() {

    }
  });*/

});

Template.boafm.onDestroyed(function(){
  document.querySelector('body').classList.remove('show-message-television');
  $('ul.tabs').tabs();
});

Template.boafm.events({

  'click #btn-hide-message, focus #btn-hide-message, click #btn-share-message, focus #btn-share-message': function () {
    document.querySelector('body').classList.remove('show-message-television');
  },

  'click #btn-show-message, focus #btn-show-message': function () {
    document.querySelector('body').classList.add('show-message-television');
  }
});

Template.boafm.helpers({
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