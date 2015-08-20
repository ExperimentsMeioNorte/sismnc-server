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

    television: {
        controller: RouteController.extend({
            layoutTemplate: 'television',
            yieldTemplates: {
                'header': {to: 'headerTelevision'},
            }
        })
    },

    newspaper: {
        controller: RouteController.extend({
            layoutTemplate: 'newspaper',
            yieldTemplates: {
                'header': {to: 'headerNewspaper'},
            }
        })
    },

    portal: {
        controller: RouteController.extend({
            layoutTemplate: 'portal',
            yieldTemplates: {
                'header': {to: 'headerPortal'},
            }
        })
    },

    radio: {
        controller: {
          boafm: RouteController.extend({
              layoutTemplate: 'fmmn',
              yieldTemplates: {
                  'header': {to: 'headerRadioFMMN'},
              }
          }),
          fmmn: RouteController.extend({
            layoutTemplate: 'boafm',
            yieldTemplates: {
                'header': {to: 'headerRadioBOAFM'},
            }
          })
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