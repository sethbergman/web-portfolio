var express = require('express');
var favicon = require('serve-favicon');
var engines = require('consolidate');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(__dirname + '/img/favicon.ico'));
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('index.html');
});

var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
