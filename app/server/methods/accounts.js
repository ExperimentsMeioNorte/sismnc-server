// OAUTH ( REDES SOCIAIS );
Meteor.startup(function() {

    // Facebook
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });
    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: "638977909535835",
        secret: "28012ad2d935da4bdbfe26b78c23f77a"
    });

    // Google
    ServiceConfiguration.configurations.remove({
        service: "google"
    });
    ServiceConfiguration.configurations.insert({
        service: "google",
        clientId: "89878768792-op9bqlm96avdu4g32p2bpvrd9ga9e7ap.apps.googleusercontent.com",
        secret: "wT1pGMsvLfuncOXp1YP4hR5L"
    });

});
