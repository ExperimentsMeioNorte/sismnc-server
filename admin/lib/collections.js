Notify = new Mongo.Collection("notify");
Program = new Mongo.Collection("program");
Content = new Mongo.Collection("content");
User = new Mongo.Collection("user");
Publicity = new Mongo.Collection("publicity");
Poll = new Mongo.Collection("poll");
Answer = new Mongo.Collection("answer");
PollUser = new Mongo.Collection("polluser");
Level = new Mongo.Collection("level");
Vehicle = new Mongo.Collection("vehicle");
Category = new Mongo.Collection("category");
Musiclist = new Mongo.Collection("musiclist");

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