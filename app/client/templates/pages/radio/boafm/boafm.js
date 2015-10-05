// Rota do Programa
RadioController = ApplicationController.extend();

Router.route('/boafm/:_id', {
  name: 'boafm',
  yieldRegions: {
    'headerBOAFM': {to: 'header'}
  },
  fastRender: true
});

Template.boafm.onRendered(function(){

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message-boafm');
  }, 1000);

  $('ul.tabs').tabs();

  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity:1,
    in_duration: 300,
    out_duration: 200,
    ready: function() {

    },
    complete: function() {

    }
  });

});

Template.boafm.onDestroyed(function(){
  document.querySelector('body').classList.remove('show-message-boafm');

  $('ul.tabs').tabs();

});

Template.boafm.events({

  'click #btn-hide-message, focus #btn-hide-message, click #btn-share-message, focus #btn-share-message': function () {
    document.querySelector('body').classList.remove('show-message-boafm');
  },

  'click #btn-show-message, focus #btn-show-message': function () {
    document.querySelector('body').classList.add('show-message-boafm');
  }
});
