#! /usr/bin/env node
var program = require('commander');

program
.version('0.0.1')
.description('Kick Ass development without sucking.')
.usage('<command>')

/*
** Look in the commands folder for the corresponding command
*/
.command('start <stack>', 'start a project with a specific stack')
.command('define [recipe]', 'describe a configuration option')
.command('generate [asset]', 'Generate an asset')
.parse(process.argv);

// var exec 	= require('child_process').exec;
// var fs 		= require('fs');
// //Arg 1 is always node
// //Arg 2 is the path to the file that has been executed
// var args 	= process.argv;
// var params 	= args.slice(2);

// var tool 	= params[0];
// var command = params[1]; 
// if(typeof tool == 'undefined') tool = 'help';

// switch(tool){
// 	case 'package':
// 		if(command == 'create'){
// 			var packageName  = params[2];
// 			var packagePath  = __dirname + '/packages/' + packageName;

// 			console.log('creating package: ', packageName);
// 			exec('git clone https://github.com/peb7268/LMFM-Package.git ' + packagePath, function(err){
// 				if(err) {
// 					console.log(err); 
// 					return;
// 				}
				
// 				console.log('writing file to: ', packagePath + '/packageB.json');
// 				var config = {
// 				  "name": packageName,
// 				  "version": "1.0.0",
// 				  "description": "LMFM example package"
// 				};
				
// 				fs.writeFile(packagePath + '/package.json', JSON.stringify(config), function(err){
// 					if(err) {
// 						return console.error(err);
// 					}
// 					console.log("Data written successfully!");
// 				});
// 			});
// 		}
// 	break;

// 	default: 
		
// 	break;
// }

