// Rota do Programa
Router.route('/rede-meionorte/programa', function(){

  this.layout('ApplicationLayout');
  this.render('program');
  this.render('headerTelevision', {to: 'header'});

  fastRender: true

}, {
  name: 'program'
});

Template.program.onRendered(function(){

  Meteor.setTimeout(function(){
    document.querySelector('body').classList.add('show-message');
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

Template.program.onDestroyed(function(){
  document.querySelector('body').classList.remove('show-message');

  $('ul.tabs').tabs();

});

Template.program.events({

  'click #btn-hide-message, focus #btn-hide-message, click #btn-share-message, focus #btn-share-message': function () {
    document.querySelector('body').classList.remove('show-message');
  },

  'click #btn-show-message, focus #btn-show-message': function () {
    document.querySelector('body').classList.add('show-message');
  }
});
