/*
** Example of a users package
** TODO: make it get the name of the package from a json file 
** so it can be generated from the command line instead of hard coded.
*/

var express        	= require('express');
var router          = express.Router();

var Activities 		= function(){
	var self 		= this;
	self._name 		= 'activities';
	console.log('initializing ' + this._name);

	router.route('/')
	.get(function(req, res){
		res.send('finding ' + self._name);
	});
}

module.exports = {'router': router, 'instance': new Activities()};
