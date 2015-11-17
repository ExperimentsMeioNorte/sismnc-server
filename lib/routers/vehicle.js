Router.map(function() {

  this.route('vehicle',
    {
      path: '/veiculo',
      waitOn: function() {
        Meteor.subscribe('vehiclePagination', Session.get('limit'));
        Meteor.subscribe('vehicle');
      }
    }
  );

  this.route('vehicleUpdate', {
      path: '/veiculo/atualizar/:_id',
      data: function(){
        return Vehicle.find({_id:this.params._id});
      }
    }
  );

  this.route('vehicleNew', {
      path: '/veiculo/registrar',
      waitOn: function() {
        Meteor.subscribe('getUrl', this.params._id);
      }
    }
  );

});