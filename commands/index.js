#! /usr/bin/env node
var program = require('commander');

program
.version('0.0.1')
.description('Kick Ass development without sucking.')
.usage('<command>')

program
.command('start <stack>', 'start a project with a specific stack', start)
.on('--help', function() {
	console.log('  Examples:');
	console.log();
	console.log('    $ start mean');
	console.log('    $ start mean -L true');
	console.log();
});


/*
** These will be the configuration options that define the setup that the app uses.
** these can be a collection of recipies or a predefined config file.
*/
program.command('define [recipe]', 'describe a configuration option');


/*
** An asset can be a model, a controller, a view, or a package. This
** Will depend on which recipies we have used to configure our 'framework'
*/
program
.command('generate [asset]', 'Generate an asset', generate)
.parse(process.argv);

function start(stack, options){
	console.log('starting a ', stack, 'with ', options);
}

function define(recipe){
	console.log('define a recipe');
}

function generate(asset){
	console.log('generating asset: ', asset)
}

// .option('-u, --username <username>', 'The user to authenticate as')
// .option('-p, --password <password>', 'The user\'s password')
// .action(function(file) {
//   console.log('user: %s pass: %s file: %s',
//       program.username, program.password, file);
// })


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

