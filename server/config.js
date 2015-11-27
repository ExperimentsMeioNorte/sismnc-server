Meteor.startup(function () {
  smtpServer = {
    username: 'alissonplus2@gmail.com',
    password: 'amor0512',
    server:   'smtp.gmail.com',
    port: 465
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtpServer.username) + ':' + encodeURIComponent(smtpServer.password) + '@' + encodeURIComponent(smtpServer.server) + ':' + smtpServer.port;

  //process.env.DDP_DEFAULT_CONNECTION_URL='http://admin.sistemameionorte.com.br';

  //process.env.DISABLE_WEBSOCKETS = 1;

  // PERMISSIONS
  for(var i in collections){
    collections[i].allow({
      insert: function(userId, form){
        return false;
      },
      update: function(userId, form, fields, modifier){
        return false;
      },
      remove: function(userId, form){
        return false;
      }
    });
  }

  // PUBLICATIONS
  Meteor.publish('program', function() {
    return Program.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_record:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('city', function() {
    return City.find({});
  });

  Meteor.publish('musiclist', function() {
    return Musiclist.find({});
  });

  Meteor.publish('notify', function() {
    return Notify.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('poll', function() {
    return Poll.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('answer', function() {
    return Answer.find(
      {status:1},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_record:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('polluser', function() {
    return PollUser.find(
      {status:1},
      {fields:
        {
          date_record:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('user', function() {
    return User.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_record:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('level', function() {
    return Level.find(
      {status:1},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_record:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('content', function() {
    return Content.find({});
  });

  Meteor.publish('vehicle', function() {
    return Vehicle.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('category', function() {
    return Category.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      }
    );
  });

  Meteor.publish('cityPagination', function(limit) {
    if (limit > City.find().count()) {
      limit = 0;
    }

    return City.find(
      {},
      { limit: limit }
    );
  });

  Meteor.publish('musiclistPagination', function(limit) {
    if (limit > Musiclist.find().count()) {
      limit = 0;
    }

    return Musiclist.find(
      {},
      { limit: limit }
    );
  });

  Meteor.publish('categoryPagination', function(limit) {
    if (limit > Category.find().count()) {
      limit = 0;
    }

    return Category.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });

  Meteor.publish('vehiclePagination', function(limit) {
    if (limit > Vehicle.find().count()) {
      limit = 0;
    }

    return Vehicle.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });

  Meteor.publish('contentPagination', function(limit) {
    if (limit > Content.find().count()) {
      limit = 0;
    }

    return Content.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });

  Meteor.publish('notifyPagination', function(limit) {
    if (limit > Notify.find().count()) {
      limit = 0;
    }

    return Notify.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });

  Meteor.publish('pollPagination', function(limit) {
    if (limit > Poll.find().count()) {
      limit = 0;
    }

    return Poll.find(
      {},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });

  Meteor.publish('userPagination', function(limit) {
    if (limit > User.find().count()) {
      limit = 0;
    }

    return User.find(
      {status:1},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });

  Meteor.publish('programPagination', function(limit) {
    if (limit > Program.find().count()) {
      limit = 0;
    }

    return Program.find(
      {status:1},
      {fields:
        {
          user_record:0,
          user_change:0,
          date_record:0,
          date_change:0
        }
      },
      { limit: limit }
    );
  });
});