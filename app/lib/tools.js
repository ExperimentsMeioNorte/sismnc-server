Meteor.smtpServerUsername = 'alissonplus2@gmail.com'

Meteor.addZeroHour = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Metodo para mostrar ou nao a tv no programa
Meteor.playTv = function(hourBegin, hourEnd){
    var programId = undefined;
    var dateObj = new Date();
    var hour = Meteor.addZeroHour(dateObj.getHours());
    var minutes = Meteor.addZeroHour(dateObj.getMinutes());
    var hourMinutes = (hour-1 + ':' + minutes);

    if(hourMinutes >= hourBegin && hourMinutes <= hourEnd){
        document.querySelector(".play-tv").style.display = 'initial';
    }else{
        document.querySelector(".play-tv").style.display = 'none';
        var hourMinutesBegin = (hour -2) + ':' + minutes;
        var hourMinutesEnd =(hour +2) + ':' + minutes;
        /*var programs = Program.findOne({
            hour_begin: {
                $gt: ((hour - 1) + ':' + minutes),
                $lt: hour_end + 1,
            },
            hour_end: {
                $gt: ((hour - 1) + ':' + minutes),
                $lt: hour_end + 1,
            }
        });*/

        var programs = Program.find(
            {},
            {
                fields: {
                    _id: 1,
                    hour_begin: 1,
                    hour_end: 1
                }
            }
        ).map(
          function(p) {

            return {
              _id: p._id,
              hour_begin: p.hour_begin,
              hour_end: p.hour_end
            };
          }
        );


        for(x in programs){
            if(hourMinutes >= programs[x].hour_begin
                && hourMinutes <= programs[x].hour_end){
                programId = programs[x]._id;
                break;
            }
        }

        toastr.warning(
            "Ops, Programa ainda não está no ar.<br /><span class=\"btn clear\" onclick=\"Router.go('program', {_id: '" + programId + "'}); $('#toast-container').remove();\">Ir para programa no ar</span><span class=\"btn clear\" onclick=\"$('#toast-container').remove()\">Continuar aqui</span>",
            '',
            {
                "progressBar": true,
                "newestOnTop": true,
                "showDuration": "100",
                "hideDuration": "100",
                "tapToDismiss": false,
                "timeOut": 0,
                "extendedTimeOut": 0
            }
        );
    }
};

// para aumentar o limit da paginacao
Meteor.incrementLimit = function(inc) {
    Session.set(
        'limit',
        (Session.get('limit') + ((inc === undefined)? 5 : inc))
    );
};

// Metodo para deixar a primeira letra da string em Maiusculo
Meteor.capitalize = function(str){
    str = (str === null)? '' : String(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
};

 // Metodo de configuracao para logar-se nas redes sociais
 Meteor.loginApp = function(evento){
     var serviceName = $(evento.currentTarget).attr('data-service');
     var callback = function (err) {
         if (!err) {
             toastr.success(
                 "Oba, sejá bem vindo.",
                 '',
                 {
                     "progressBar": true,
                     "newestOnTop": true,
                     "showDuration": "100",
                    "hideDuration": "100",
                    "timeOut": "1000"
                }
            );
        } else if (err instanceof Accounts.LoginCancelledError) {
            toastr.warning(
                "Ops, Não pode efetuar o login.",
                '',
                {
                    "progressBar": true,
                    "newestOnTop": true,
                    "showDuration": "100",
                    "hideDuration": "100",
                    "timeOut": "1000"
                }
            );
        } else if (err instanceof ServiceConfiguration.ConfigError) {
            toastr.warning(
                "Ops, Erro de configuração.",
                '',
                {
                    "progressBar": true,
                    "newestOnTop": true,
                    "showDuration": "100",
                    "hideDuration": "100",
                    "timeOut": "1000"
                }
            );
        } else {
            toastr.warning(
                "Ixi, Algo de ruim ocorreu inesperadamente.",
                '',
                {
                    "progressBar": true,
                    "newestOnTop": true,
                    "showDuration": "100",
                    "hideDuration": "100",
                    "timeOut": "1000"
                }
            );
        }
    };

    Meteor.loginAppService = Meteor["loginWith" + Meteor.capitalize(serviceName)];

    Meteor.loginAppOptions = {};
    if (Accounts.ui._options.requestPermissions[serviceName]){
        Meteor.loginAppOptions.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
    }

    if (Accounts.ui._options.requestOfflineToken[serviceName]){
        Meteor.loginAppOptions.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
    }
};