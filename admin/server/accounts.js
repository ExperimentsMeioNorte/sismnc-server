// OAUTH ( REDES SOCIAIS );

Meteor.startup(function() {

    smtpServer = {
        username: 'alissonplus2@gmail.com',
        password: '$12345678',
        server:   'smtp.gmail.com',
        port: 465
    }

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtpServer.username) + ':' + encodeURIComponent(smtpServer.password) + '@' + encodeURIComponent(smtpServer.server) + ':' + smtpServer.port;

    // Facebook
    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "facebook",
        appId: "638977909535835",
        secret: "28012ad2d935da4bdbfe26b78c23f77a"
        //loginStyle: "redirect"
    });

    // Google
    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "89878768792-op9bqlm96avdu4g32p2bpvrd9ga9e7ap.apps.googleusercontent.com",
        secret: "wT1pGMsvLfuncOXp1YP4hR5L"
        //loginStyle: "redirect"
    });

});