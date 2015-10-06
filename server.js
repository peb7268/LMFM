
var express        	= require('express');
var app            	= express();
var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');
var db 				= require('./config/db');

var port = process.env.PORT || 8080; 

//Connect to mongoDB
//mongoose.connect(db.url); 

//Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 				//Simulate DELETE/PUT requests
app.use(express.static(__dirname + '/public')); 				//Set static files location /public/img will be /img for users

//Routes
require('./app/routes')(app); // configure our routes

app.listen(port);               								//Start our app at http://localhost:8080


console.log('app listening on port: ' + port);

//Expose app           
exports = module.exports = app; 