//conexão
//Meteor.remote = DDP.connect("http://zapzap.club:3000"); // em producao
Meteor.remote = DDP.connect("http://localhost:3000"); // em desenvolvimento

//collection
User = new Meteor.Collection('user', Meteor.remote);
Program = new Meteor.Collection('program', Meteor.remote);
Category = new Meteor.Collection('category', Meteor.remote);
Content = new Meteor.Collection('content', Meteor.remote);

//configurações automatizadas
collectionsName = {
    User: 'user',
    Program: 'program',
    Category: 'category',
    Content: 'content'
};

collections = {
    User: User,
    Program: Program,
    Category: Category,
    Content: Content
};