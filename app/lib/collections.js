//conecao
Meteor.remote = DDP.connect("http://zapzap.club:3000");

//collection
User = new Meteor.Collection('user', Meteor.remote);

//configuracoes automatizadas
collectionsName = {
    User: 'user'
};

collections = {
    User: User
};