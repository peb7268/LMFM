#! /usr/bin/env node
var program = require('commander');

/*
** An asset can be a model, a controller, a view, or a package. This
** Will depend on which recipies we have used to configure our 'framework'
*/
program
	.usage('<asset> [load_deps]')
	.description('Start a stack from a predefined config')
	.option('-L, --load_deps', 'load recipe dependencies')
	.action(function(asset){
		console.log('generating asset: ', asset)
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

if (!program.args.length) program.help();