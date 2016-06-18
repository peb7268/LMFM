/*
** Example of a users package
** TODO: make it get the name of the package from a json file 
** so it can be generated from the command line instead of hard coded.
*/

var Package 	 	= require(__dirname + '/../../framework/Package');
var fs 				= require("fs");
var pkg_config 		= JSON.parse(fs.readFileSync(__dirname + "/package.json"));
var router;

var Users = function(pkg_config){
	router 			= require('./server/routes')(this);
	this._name 		= pkg_config.name;

	console.log('initializing ' + this._name + ' package');
};

//Inherit from Package
Users.super_ = Package;
Users.prototype = Object.create(Package.prototype, {
    constructor: {
        value: Users,
        enumerable: false
    }
});

var users = new Users(pkg_config);

/**
* How to interract with the db *

//The next 3 lines have been abstracted up to the main app instance
var dbResource	= require('./../../config/db');
this.db 		= dbResource.db;
this.mongoose 	= dbResource.mongoose;

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
