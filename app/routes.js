
module.exports = function(app) {
    //API routes
    app.get('/api/activities', function(req, res) {
        Activity.find(function(err, activities) {
            console.log('finding activity');
            if(err) res.send(err);
            res.json(activities);
        });
    });

    //Frontend / Angular Routes - all other routes get sent here for angular to process
    app.get('*', function(req, res) {
        console.log(__dirname);
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};