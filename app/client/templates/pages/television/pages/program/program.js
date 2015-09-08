// Rota do Programa
Router.route('/programa', function(){

  this.layout('ApplicationLayout');
  this.render('program');
  this.render('headerTelevision', {to: 'header'});

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
});
