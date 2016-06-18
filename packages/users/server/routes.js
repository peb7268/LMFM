
var express = require('express');
var router;

function routes(self){
    router = express.Router();
    router.route('/')
    .get(function(req, res){
        // res.send(self._name + ' routes file');
        res.render('index');
    });

    return router;
}

module.exports = routes;