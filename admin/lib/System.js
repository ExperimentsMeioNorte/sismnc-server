Meteor.zion = {
    home: {
        controller: RouteController.extend({
            layoutTemplate: 'ApplicationLayout',
            yieldTemplates: {
                'header': {to: 'header'},
                'footer': {to: 'footer'},
            }
        })
    },

    login: {
        controller: RouteController.extend({
            layoutTemplate: 'login',
            onBeforeAction: function(){
                Meteor.zion.functionsGeneric.validateUserLogin();
                this.functions.accountUiConfig();
                this.next();
            }
        }),

        functions: {
            accountUiConfig: function(){
                Accounts.ui.config({
                    /*requestPermissions: {
                        facebook: ['user_likes']
                    },*/
                    requestOfflineToken: {
                        google: true
                    },
                    passwordSignupFields: 'EMAIL_ONLY'
                });
            }
        }
    },

    functionsGeneric: {
        validateUserLogin: function(){
            if(Meteor.userId === undefined){
                Router.go('/login');
            }
        }
    }
};