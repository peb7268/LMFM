/*
** Example of a users package
** TODO: make it get the name of the package from a json file 
** so it can be generated from the command line instead of hard coded.
*/

var express        	= require('express');
var router          = express.Router();
var fs 				= require("fs");
var config 			= JSON.parse(fs.readFileSync(__dirname + "/package.json"));
var util 			= require('util');

var Users = function(){
	var self 		= this;
	this.dbResource = require('./../../config/db');
	self._name 		= config.name;

	console.log('initializing ' + self._name);

	router.route('/')
	.get(function(req, res){
		res.send('finding '+ self._name);
	});

}

//Get a new package instance
var users		= new Users();

//Define the package schema
users.dbResource.schema = new users.dbResource.mongoose.Schema({ 
	username: { 
		type: String, 
		required: true
	},
	email: { 
		type: String, 
		required: true
	},
	name: { 
		type: String, 
		required: false
	}
});

//Attatch the model to the package db resource
users.dbResource.User = users.dbResource.mongoose.model('User', users.dbResource.schema);

//Create a new user
var user = new users.dbResource.User({
	'username'  : 'peb7268',
	'email'		: 'peb7268@gmail.com',
	'name'		: 'Paul'
});

//Save it to the db ( mongo )
user.save(function (err, user) {
	if (err) return console.error(err);
  	console.log('new user created');
	console.log(util.inspect(user));
});

module.exports = {'router': router, 'instance': users};
