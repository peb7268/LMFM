
var Package 		= function(){};
Package.prototype 	= {
	augmentConfig: function(app_config){
		console.log('Augmenting AppConfig for ' + this._name);
		app_config.views.path.push(__dirname + "/../packages/" + this._name + "/public/views");
	}
}

module.exports = Package;