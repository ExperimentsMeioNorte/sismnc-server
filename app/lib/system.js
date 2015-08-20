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
        },

        dateNow: function(){
            var dateObj = (new Date());
            return dateObj.getDate() + '/' + (dateObj.getMonth()+1) + '/' + dateObj.getFullYear() + ' ' + dateObj.getHours() + ':' +  dateObj.getMinutes() + ':' + dateObj.getSeconds()
        }
    },

    collections: {
        instituition: new Meteor.Collection("instituition"),
        program: new Meteor.Collection("program"),
        comment: new Meteor.Collection("comment"),
        notification: new Meteor.Collection("notification"),
        subscription: new Meteor.Collection("subscription"),
        lastcomment: new Meteor.Collection("lastcomment"),
        userban: new Meteor.Collection("userban")
    },

    schemas: {
        instituition: new SimpleSchema({
            name: {
                type: String,
                label: "Nome"
            },

            description: {
                type: String,
                label: "Descricao",
                optional: true
            },

            imageavatar: {
                type: String,
                label: "Imagem Avatar",
                optional: true
            },

            imagefolder: {
                type: String,
                label: "Imagem Conteudo",
                optional: true
            },

            feedurl: {
                type: String,
                label: "Url de Feed/RSS",
                optional: true
            },

            status: {
                type: String,
                label: "Status",
                optional: true,
                defaultValue: '1'
            },

            userregister: {
                type: String,
                label: "Usuário Registro",
                optional: true,
                defaultValue: this.userId+''
            },

            userupdate: {
                type: String,
                label: "Usuário Atualizacao",
                optional: true,
                defaultValue: this.userId+''
            },

            dateregister: {
                type: String,
                label: "Data Registro",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            },

            dateupdate: {
                type: String,
                label: "Data Atualizacao",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            }
        }),

        program: new SimpleSchema({
            instituitionid: {
                type: String,
                label: "Instituicao ID"
            },

            name: {
                type: String,
                label: "Nome"
            },

            description: {
                type: String,
                label: "Descricao",
                optional: true
            },

            day: {
                type: String,
                label: "Dia",
                optional: true
            },

            hour: {
                type: String,
                label: "Hora",
                optional: true
            },

            facebookurl: {
                type: String,
                label: "Url do Facebook",
                optional: true
            },

            googleurl: {
                type: String,
                label: "Url do Google",
                optional: true
            },

            imageavatar: {
                type: String,
                label: "Imgaem Avatar",
                optional: true
            },

            imagefolder: {
                type: String,
                label: "Imagem Conteudo",
                optional: true
            },

            status: {
                type: String,
                label: "Status",
                optional: true,
                defaultValue: '1'
            },

            userregister: {
                type: String,
                label: "Usuário Registro",
                optional: true,
                defaultValue: this.userId+''
            },

            userupdate: {
                type: String,
                label: "Usuário Atualizacao",
                optional: true,
                defaultValue: this.userId+''
            },

            dateregister: {
                type: String,
                label: "Data Registro",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            },

            dateupdate: {
                type: String,
                label: "Data Atualizacao",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            }
        }),

        comment: new SimpleSchema({
            programid: {
                type: String,
                label: "Programa ID"
            },

            userid: {
                type: String,
                label: "Usuario ID"
            },

            text: {
                type: String,
                label: "Comentario",
                optional: true
            },

            image: {
                type: String,
                label: "comentario",
                optional: true
            },

            video: {
                type: String,
                label: "comentario",
                optional: true
            },

            voz: {
                type: String,
                label: "comentario",
                optional: true
            },

            status: {
                type: String,
                label: "Status",
                optional: true,
                defaultValue: '1'
            },

            userregister: {
                type: String,
                label: "Usuário Registro",
                optional: true,
                defaultValue: this.userId+''
            },

            userupdate: {
                type: String,
                label: "Usuário Atualizacao",
                optional: true,
                defaultValue: this.userId+''
            },

            dateregister: {
                type: String,
                label: "Data Registro",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            },

            dateupdate: {
                type: String,
                label: "Data Atualizacao",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            }
        }),

        notification: new SimpleSchema({
            programid: {
                type: String,
                label: "Programa ID"
            },

            content: {
                type: String,
                label: "Conteudo"
            },

            status: {
                type: String,
                label: "Status",
                optional: true,
                defaultValue: '1'
            },

            userregister: {
                type: String,
                label: "Usuário Registro",
                optional: true,
                defaultValue: this.userId+''
            },

            userupdate: {
                type: String,
                label: "Usuário Atualizacao",
                optional: true,
                defaultValue: this.userId+''
            },

            dateregister: {
                type: String,
                label: "Data Registro",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            },

            dateupdate: {
                type: String,
                label: "Data Atualizacao",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            }
        }),

        subscription: new SimpleSchema({
            userid: {
                type: String,
                label: "Usuario ID"
            },

            instituitionid: {
                type: String,
                label: "Instituicao ID"
            }
        }),

        lastcomment: new SimpleSchema({
            userid: {
                type: String,
                label: "Usuario ID"
            },

            commentid: {
                type: String,
                label: "Comentario ID"
            }
        }),

        userban: new SimpleSchema({
            userid: {
                type: String,
                label: "usuario ID"
            },

            programid: {
                type: String,
                label: "Programa ID"
            },

            status: {
                type: String,
                label: "Status",
                optional: true,
                defaultValue: '1'
            },

            userregister: {
                type: String,
                label: "Usuário Registro",
                optional: true,
                defaultValue: this.userId+''
            },

            userupdate: {
                type: String,
                label: "Usuário Atualizacao",
                optional: true,
                defaultValue: this.userId+''
            },

            dateregister: {
                type: String,
                label: "Data Registro",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            },

            dateupdate: {
                type: String,
                label: "Data Atualizacao",
                optional: true,
                defaultValue: (new Date()).getDate() + '/' + ((new Date()).getMonth()+1) + '/' + (new Date()).getFullYear() + ' ' + (new Date()).getHours() + ':' +  (new Date()).getMinutes() + ':' + (new Date()).getSeconds()
            }
        }),
    }
};

Meteor.zion.collections.instituition.attachSchema(Meteor.zion.schemas.instituition);
Meteor.zion.collections.program.attachSchema(Meteor.zion.schemas.program);
Meteor.zion.collections.comment.attachSchema(Meteor.zion.schemas.comment);
Meteor.zion.collections.notification.attachSchema(Meteor.zion.schemas.notification);
Meteor.zion.collections.subscription.attachSchema(Meteor.zion.schemas.subscription);
Meteor.zion.collections.lastcomment.attachSchema(Meteor.zion.schemas.lastcomment);
Meteor.zion.collections.userban.attachSchema(Meteor.zion.schemas.userban);

//Meteor.zion.collections.instituition.insert({name: "Meio Norte"}, function(error, result) {});
