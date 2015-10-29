Router.map(function() {

  this.route('musiclist',
    {
      path: '/musicas',
      waitOn: function() {
        Meteor.subscribe('musiclistPagination', Session.get('limit'));
        Meteor.subscribe('musiclist');
      }
    }
  );

});