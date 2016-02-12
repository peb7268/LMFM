
var express        	= require('express');
var app            	= express();

var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');

var util 			= require('util');
var port 			= process.env.PORT || 3000; 

//Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 								//Simulate DELETE/PUT requests

app.listen(port);               												//Start our app at http://localhost:3000
console.log('app listening on port: ' + port);

//Loads All of the packages
require('./framework/packages')(app, __dirname + '/packages');

module.exports = app; 