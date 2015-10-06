
var mongoose 	= require('mongoose');

var Activity 	= mongoose.model('Activity', {
	name: { type: String, default: 'Running' }
});

module.exports 	= Activity;