//conexão
//Meteor.remote = DDP.connect("http://zapzap.club:3000"); // em producao
Meteor.remote = DDP.connect("http://localhost:3000"); // em desenvolvimento

//collection
User = new Mongo.Collection('user', Meteor.remote);
Program = new Mongo.Collection('program', Meteor.remote);
Category = new Mongo.Collection('category', Meteor.remote);
Content = new Mongo.Collection('content', Meteor.remote);
Answer = new Mongo.Collection('answer', Meteor.remote);
Poll = new Mongo.Collection('poll', Meteor.remote);

//configurações automatizadas
collectionsName = {
    User: 'user',
    Program: 'program',
    Category: 'category',
    Content: 'content',
    Answer: 'answer',
    Poll: 'poll'
};

collections = {
    User: User,
    Program: Program,
    Category: Category,
    Content: Content,
    Answer: Answer,
    Poll: Poll
};
