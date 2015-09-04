Router.route('/login', {
    name: 'login',
    controller: RouteController.extend({
        layoutTemplate: 'login',
        waitOn: function(){
            Accounts.ui.config({
                /*requestPermissions: {
                    facebook: ['user_likes']
                },
                requestOfflineToken: {
                    google: true
                },*/
                forceApprovalPrompt:  true
                //passwordSignupFields: 'USERNAME_AND_EMAIL'
            });
        }
    })
});