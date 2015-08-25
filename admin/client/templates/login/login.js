/*Template.login.rendered = function (template) {
    console.log(template);
    document.querySelector('.login-close-text').style.display = 'none';
    document.querySelector('.login-link-text').style.display = 'none';
};*/

Template.login.events({
    'click span.sign-in-text-facebook': function(event) {
        event.preventDefault();
        Meteor.loginWithFacebook({}, function(err){
            Router.go('/');
        });
    },

    'click span.sign-in-text-google': function(event) {
        event.preventDefault();
        Meteor.loginWithGoogle({}, function(err){
            Router.go('/');
        });
    }
});