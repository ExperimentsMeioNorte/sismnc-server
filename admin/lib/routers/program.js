Router.map(function() {

  this.route('programs', {
      path: '/programas/',
      waitOn: function() {
        Meteor.subscribe('programPagination', Session.get('limit'));
        Meteor.subscribe('program');
        Meteor.subscribe('vehicle');
        Meteor.subscribe('category');
      },
      data: function(){
          return {success: this.params.success};
      }
    }
  );

  this.route('programUpdate', {
      path: '/programas/atualizar/:_id',
      data: function(){
        return Program.find({_id:this.params._id});
      }
    }
  );

  this.route('programNew', {
      path: '/programas/registrar',
      waitOn: function() {
        Meteor.subscribe('getUrl', this.params._id);
      }
    }
  );

});