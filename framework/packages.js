/*
** Packages File: 
** This file aggregates / registers and attatches all of the packages to the main 
** Express instance. 
*/

var fs 			 = require('fs');
var path 	 	 = require('path');
var util 		 = require('util');

var Packages 	 = function(app, config){
	var package_order  	= config.packages.order;
	var package_path 	= __dirname + '/..' + config.packages.path;
	
	this.dir 	 = package_path;
	this.init 	 = function(config){
		this.getList(config);	//Refactoring so it loads the packages in order

		for(orderIdx in this.list.order){
			var packageName = this.list.order[orderIdx];
			console.log('packageName: ' + packageName);
			// console.log("this.list: \n");
			// console.log(this.list);
			// console.log('packageName: ' + packageName);


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
	this.getList = function(config) { 
		var dirList  		= {};
		var files 	 		= fs.readdirSync(dir);
		var self     		= this;
		self.package_order 	= config.packages.order;

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

	    this.list 		= dirList;
	    this.list.order = self.package_order; 
	}

	this.init(config);
};

module.exports = Packages;