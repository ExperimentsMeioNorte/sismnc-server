//conexão
Meteor.remote = DDP.connect("http://zapzap.club:3000");

//collection
User = new Meteor.Collection('user', Meteor.remote);

//configurações automatizadas
collectionsName = {
    User: 'user'
};

collections = {
    User: User
};