
var Package 		= function(){};
Package.prototype 	= {
	augmentConfig: function(app_config){
		console.log('augmenting '+ this._name +' config');
	}
}

module.exports = Package;