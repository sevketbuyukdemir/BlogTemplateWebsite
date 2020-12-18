var express = require('express');
var app = express();
var app_router = require('./routers/app_router.js');

// For .css, .js and image files
app.use(express.static(__dirname + '/public'));
// For route
app.use('/', app_router);
app.use('/whoami', app_router);
app.use('/education', app_router);
app.use('/projects', app_router);
app.use('/work_experience', app_router);
app.use('/mobile_apps', app_router);
app.use('/web_apps', app_router);
app.use('/desktop_apps', app_router);
app.use('/computer_vision', app_router);
app.use('/artificial_intelligence', app_router);
app.use('/news', app_router);
app.use('/article', app_router);
app.use('/game', app_router);
app.use('/movies_and_series', app_router);
app.use('/visuals_and_videos', app_router);
app.use('/contact', app_router);

// For 404 error
app.use('*', app_router);

var server = app.listen(8080);
// var server = app.listen(8080, 'your_local_ip_address'); // listen for local area all devices