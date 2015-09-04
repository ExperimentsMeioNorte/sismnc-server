// Rota Principal
Router.route('/', function(){

  this.layout('ApplicationLayout');
  this.render('home');

}, {
  name: 'home'
});


// Ao Entrar
Template.home.onRendered(function(){

   $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true
    }
  );

  $('.modal-trigger').leanModal({
      dismissible: true,
      opacity:1,
      in_duration: 300,
      out_duration: 200,
      ready: function() { console.log('Modal Aberto'); },
      complete: function() { console.log('Modal Fechado'); }
    }
  );
});

// Ao Sair
// Template.home.onDestroyed(function(){
// });