#! /usr/bin/env node
var program = require('commander');

program
	.usage('start <stack>')
	.description('Start a stack from a predefined config')
	.option('-L, --load_deps', 'load recipe dependencies')
	.action(function(stack){
		console.log('starting a', stack, 'stack.');
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

if(program.load_deps) loadDeps(program.load_deps);
function loadDeps(deps){
	console.log('loading deps: ', deps)
}

if (!program.args.length) program.help();