var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(request, response){
    response.sendFile(path.resolve('./views/home.html'));
});

router.get('/whoami', function(request, response){
    response.sendFile(path.resolve('./views/whoami.html'));
});

router.get('/education', function(request, response){
    response.sendFile(path.resolve('./views/education.html'));
});

router.get('/projects', function(request, response){
    response.sendFile(path.resolve('./views/projects.html'));
});

router.get('/work_experience', function(request, response){
    response.sendFile(path.resolve('./views/work_experience.html'));
});

router.get('/mobile_apps', function(request, response){
    response.sendFile(path.resolve('./views/mobile_apps.html'));
});

router.get('/web_apps', function(request, response){
    response.sendFile(path.resolve('./views/web_apps.html'));
});

router.get('/desktop_apps', function(request, response){
    response.sendFile(path.resolve('./views/desktop_apps.html'));
});

router.get('/computer_vision', function(request, response){
    response.sendFile(path.resolve('./views/computer_vision.html'));
});

router.get('/artificial_intelligence', function(request, response){
    response.sendFile(path.resolve('./views/artificial_intelligence.html'));
});

router.get('/news', function(request, response){
    response.sendFile(path.resolve('./views/news.html'));
});

router.get('/article', function(request, response){
    response.sendFile(path.resolve('./views/article.html'));
});

router.get('/game', function(request, response){
    response.sendFile(path.resolve('./views/game.html'));
});

router.get('/movies_and_series', function(request, response){
    response.sendFile(path.resolve('./views/movies_and_series.html'));
});

router.get('/visuals_and_videos', function(request, response){
    response.sendFile(path.resolve('./views/visuals_and_videos.html'));
});

router.get('/contact', function(request, response){
    response.sendFile(path.resolve('./views/contact.html'));
});

router.get('*', function(request, response){
    response.sendFile(path.resolve('./views/404.html'));
});

module.exports = router;