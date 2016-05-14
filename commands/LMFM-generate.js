#! /usr/bin/env node
var program = require('commander');

/*
** An asset can be a model, a controller, a view, or a package. This
** Will depend on which recipies we have used to configure our 'framework'
*/
program
	.usage('<asset> [load_deps]')
	.description('Generates an asset')
	.option('-L, --load_deps', 'load recipe dependencies')
	.option('-p, --package_name', 'specify a package name')
	.action(function(asset, package_name){
		console.log('generating asset: ', asset);
		if(asset == 'package') generatePackage(package_name);
	})
	.on('--help', function() {
		console.log('  Examples:');
		console.log();
		console.log('    $ start mean');
		console.log('    $ start angular2');
		console.log('    $ start react');
		console.log('    $ start mean -L true');
		console.log();
	})
.parse(process.argv);

if(program.handle_option) handleOption(program.handle_option);
function handleOption(option){
	console.log('some option example: ', option)
}

function generatePackage(packageName){
	console.log('creating package: ', packageName);
	return;

	//TODO:This doesnt work yet, need to add the deps back in or actually pull it from NPM
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

if (!program.args.length) program.help();