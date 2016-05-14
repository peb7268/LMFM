#! /usr/bin/env node

var program = require('commander');


program
.description('Kick Ass development without sucking.')
.usage('<command>')
.version('0.0.1');

program
.command('start <stack>')
.description('start a project with a specific stack')
.option("-L, --load_deps <bool>", "Load the dependencies or not")
.action(function(stack, options){
	console.log('starting "%s" loading deps %s ', stack, options.load_deps);
}).on('--help', function() {
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
program
.command('define [recipe]')
.description('describe a configuration option')



/*
** An asset can be a model, a controller, a view, or a package. This
** Will depend on which recipies we have used to configure our 'framework'
*/
program
.command('generate [asset]', 'generate an asset')
.description('Generate an asset')
.parse(process.argv);


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

