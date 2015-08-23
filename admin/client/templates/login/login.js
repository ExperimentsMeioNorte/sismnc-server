Template.login.events({
    'click span.sign-in-text-facebook': function(event) {
        Meteor.loginWithFacebook({}, function(err){});
    },

    'click span.sign-in-text-google': function(event) {
        Meteor.loginWithGoogle({}, function(err){});
    }
});