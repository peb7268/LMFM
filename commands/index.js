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

