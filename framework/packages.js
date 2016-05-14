/*
** Packages File: 
** This file aggregates / registers and attatches all of the packages to the main 
** Express instance. 
*/

var fs 			 = require('fs');
var path 	 	 = require('path');
var util 		 = require('util');

var Packages 	 = function(app, packagesPath, config){
	this.dir 	 = packagesPath;
	this.init 	 = function(config){
		this.getList(packagesPath);
		for(packageName in this.list){
			var module 	= require(this.list[packageName].path + '/app.js');
			var package = module.instance;
			var router  = module.router;
			
			//Mount the package routes to the main app routes
			app.use('/' + package._name, module.router);
		}
	};

	/*
	* Returns an object map of the packages
	*/
	this.getList = function(dir) { 
		var dirList  = {};
		var files 	 = fs.readdirSync(dir);
		var self     = this;

		files.map(function (file) {
	        return path.join(self.dir, file);
	    }).filter(function (file) {
	        return fs.statSync(file).isDirectory();
	    }).forEach(function (path) {
	        var packageName = path.split('packages/')[1];
	        var pkg 		= {
	        	'path' : path,
	        	'name' : packageName
	        };
	        
	        dirList[packageName] = pkg;
	    });	
	    this.list = dirList;
	}

	this.init(config);
};

module.exports = Packages;