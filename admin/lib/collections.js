Notify = new Meteor.Collection("notify");
Program = new Meteor.Collection("program");
Content = new Meteor.Collection("content");
User = new Meteor.Collection("user");
Publicity = new Meteor.Collection("publicity");
Poll = new Meteor.Collection("poll");
Answer = new Meteor.Collection("answer");
PollUser = new Meteor.Collection("polluser");
Level = new Meteor.Collection("level");
Vehicle = new Meteor.Collection("vehicle");
Category = new Meteor.Collection("category");
Musiclist = new Meteor.Collection("musiclist");

collectionsName = {
	Notify: 'notify',
	Program: 'program',
	Content: 'content',
	User: 'user',
	Publicity: 'publicity',
	Poll: 'poll',
	PollUser: 'polluser',
	Answer: 'answer',
	Level: 'level',
	Vehicle: 'vehicle',
	Category: 'category',
	Musiclist: 'musiclist'
};

collections = {
	Notify: Notify,
	Program: Program,
	Content: Content,
	User: User,
	Publicity: Publicity,
	Poll: Poll,
	PollUser: PollUser,
	Answer: Answer,
	Level: Level,
	Vehicle: Vehicle,
	Category: Category,
	Musiclist: Musiclist
};