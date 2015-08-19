Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {

    this.route('/',
        {
            layoutTemplate: 'ApplicationLayout',
            yieldTemplates: {
                'header': {to: 'header'},
                'footer': {to: 'footer'},
            }
        }
    );

    this.route('login',
        {
            layoutTemplate: 'login',
            onBeforeAction: function(){
                if(Meteor.userId2 === undefined){
                    Router.go('/login');
                }

                Accounts.ui.config({
                    /*requestPermissions: {
                        facebook: ['user_likes']
                    },*/
                    requestOfflineToken: {
                        google: true
                    },
                    passwordSignupFields: 'EMAIL_ONLY'
                });


                this.next();
            }
        }
    );

});
