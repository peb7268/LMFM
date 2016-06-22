module.exports = function(config) {
  config.set({
  	//basePath: '',

    frameworks: ['mocha', 'chai'],

    reporters: ['progress'],

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

    files: [
      './packages/**/test/**/*.js'
    ],

    plugins:[
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-mocha',
        'karma-chai'
    ],

    browsers: ['PhantomJS']
    //browsers: ['Chrome', 'Firefox']
  });
};