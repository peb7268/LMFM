/*
** Example of a users package
** TODO: make it get the name of the package from a json file 
** so it can be generated from the command line instead of hard coded.
*/

var Package 	 	= require(__dirname + '/../../framework/Package');
var fs 				= require("fs");
var pkg_config 		= JSON.parse(fs.readFileSync(__dirname + "/package.json"));
var router;

var Activities 		= function(pkg_config){
	router 			= require('./server/routes')(this);
	this._name 		= pkg_config.name;
	console.log('initializing ' + this._name + ' package');
}

//Inherit from Package
Activities.super_ = Package;
Activities.prototype = Object.create(Package.prototype, {
    constructor: {
        value: Activities,
        enumerable: false
    }
});

var activities 		= new Activities(pkg_config);

module.exports = {'router': router, 'instance': activities };
