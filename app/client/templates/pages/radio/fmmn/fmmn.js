// Rota do Meio Norte FM
RadioController = ApplicationController.extend();

Router.route('/fmmeionorte/:_id', {
  name: 'fmmn',
  yieldRegions: {
    'headerFMMN': {to: 'header'}
  },
  fastRender: true
});

Template.fmmn.onRendered(function(){

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message-fmmn');
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

Template.fmmn.onDestroyed(function(){
  document.querySelector('body').classList.remove('show-message-fmmn');

  $('ul.tabs').tabs();

});

Template.fmmn.events({

  'click #btn-hide-message, focus #btn-hide-message, click #btn-share-message, focus #btn-share-message': function () {
    document.querySelector('body').classList.remove('show-message-fmmn');
  },

  'click #btn-show-message, focus #btn-show-message': function () {
    document.querySelector('body').classList.add('show-message-fmmn');
  }
});
