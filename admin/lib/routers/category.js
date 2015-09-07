Router.map(function() {

  this.route('category',
    {
      path: '/categoria',
      waitOn: function() {
        Meteor.subscribe('categoryPagination', Session.get('limit'));
        Meteor.subscribe('category');
      }
    }
  );

  this.route('categoryUpdate', {
      path: '/categoria/atualizar/:_id',
      data: function(){
        return Category.find({_id:this.params._id});
      }
    }
  );

  this.route('categoryNew', {
      path: '/cateogria/registrar',
      waitOn: function() {
        Meteor.subscribe('getUrl', this.params._id);
      }
    }
  );

});