var gulp 	= require('gulp');
var Server 	= require('karma').Server;
var clear 	= require('clear');
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  clear();
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


gulp.task('dev', ['test']);
gulp.task('default', []);