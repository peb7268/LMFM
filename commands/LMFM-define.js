#! /usr/bin/env node
var program = require('commander');

/*
** These will be the configuration options that define the setup that the app uses.
** these can be a collection of recipies or a predefined config file.
** composables are other recipies you can combine into this recipe.
*/
program
	.usage('<recipe> [composeables]')
	.option('-L, --load_deps', 'load recipe dependencies')
	.action(function(recipe, composeables){
		console.log('recipe: ', recipe);
		if(composeables.length > 0){
			console.log('composeables: ', composeables);
		}
	}).on('--help', function(){
		console.log('  Examples:');
		console.log('');
		console.log('    $ LMFM define mongoose');
		console.log('    $ LMFM define mongoose mongo some-mongo-orm');
		console.log('');	
	})
.parse(process.argv);

if(program.load_deps) loadDeps(program.load_deps);

function loadDeps(deps){
	console.log('loading deps: ', deps)
}