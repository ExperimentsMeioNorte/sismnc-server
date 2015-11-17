Router.map(function() {

  this.route('city',
    {
      path: '/cidade',
      waitOn: function() {
        Meteor.subscribe('cityPagination', Session.get('limit'));
        Meteor.subscribe('city');
      }
    }
  );

  this.route('cityUpdate', {
      path: '/cidade/atualizar/:_id',
      data: function(){
        return City.find({_id:this.params._id});
      }
    }
  );

  this.route('cityNew', {
      path: '/cidade/registrar',
      waitOn: function() {
        Meteor.subscribe('getUrl', this.params._id);
      }
    }
  );

});