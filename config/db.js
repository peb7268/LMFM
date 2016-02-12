
var dirname = __dirname.split('LMFM/')[1];
var connectionUrl  	= 'mongodb://localhost/lmfm-dev';

//Connect to mongoDB
var mongoose 		= require('mongoose');
var connection 		= mongoose.connect(connectionUrl);
var db				= mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', console.log.bind(console, 'Db connected in: ' + dirname));

module.exports 		= {'connection': db, 'mongoose' : mongoose};