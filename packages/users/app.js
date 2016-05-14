/*
** Example of a users package
** TODO: make it get the name of the package from a json file 
** so it can be generated from the command line instead of hard coded.
*/

var fs 				= require("fs");
var config 			= JSON.parse(fs.readFileSync(__dirname + "/package.json"));
var util 			= require('util');
var router;
console.log('Routes: ');
console.log(router);

var Users = function(){
	router 			= require('./server/routes')(this);
	var dbResource	= require('./../../config/db');
	this.db 		= dbResource.db;
	this.mongoose 	= dbResource.mongoose;
	this._name 		= config.name;

	console.log('initializing ' + this._name);
}

//Get a new package instance
var users		= new Users();

/**
* How to interract with the db *

//Define the package schema
users.schema = new users.mongoose.Schema({ 
	username: { 
		type: String, 
		required: true,
		unique: true
	},
	email: { 
		type: String, 
		required: true,
		unique: true
	},
	name: { 
		type: String, 
		required: false
	}
});

//Attatch the model to the package db resource
users.Model = users.mongoose.model('User', users.schema);

//Create a new user
var user = new users.Model({
	'username'  : 'user2',
	'email'		: 'user@gmail.com',
});

//Save it to the db ( mongo )
user.save(function (err, user) {
	if (err) return console.error(err);
  	console.log('new user created');
	console.log(util.inspect(user));
});

*
**/

module.exports = {'router': router, 'instance': users};
