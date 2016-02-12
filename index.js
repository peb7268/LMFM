#! /usr/bin/env node
var exec 	= require('child_process').exec;
var fs 		= require('fs');
//Arg 1 is always node
//Arg 2 is the path to the file that has been executed
var args 	= process.argv;
var params 	= args.slice(2);

var tool 	= params[0];
var command = params[1]; 

if(tool == 'package' && command == 'create'){
	var packageName  = params[2];
	var packagePath  = __dirname + '/packages/' + packageName;

	console.log('creating package: ', packageName);
	exec('git clone https://github.com/peb7268/LMFM-Package.git ' + packagePath, function(err){
		if(err) {
			console.log(err); 
			return;
		}
		
		console.log('writing file to: ', packagePath + '/packageB.json');
		var config = {
		  "name": packageName,
		  "version": "1.0.0",
		  "description": "LMFM example package"
		};
		
		fs.writeFile(packagePath + '/package.json', JSON.stringify(config), function(err){
			if(err) {
				return console.error(err);
			}
			console.log("Data written successfully!");
		});
	});
}
