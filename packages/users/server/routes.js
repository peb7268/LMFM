
console.log('users routes file');

var express = require('express');
var router;

function routes(self){
    router = express.Router();
    router.route('/')
    .get(function(req, res){
        res.send('finding '+ self._name);
    });

    return router;
}

module.exports = routes;