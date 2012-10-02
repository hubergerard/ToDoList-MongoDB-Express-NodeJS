/*
 * Require all the modules needed. 
 */

var express = require('express');
var http = require('http');
var path = require('path');
var connect = require('connect');
  require('./db');

var app = express();

/*
 * Configure Express..
 */
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(connect.urlencoded());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

/*
 * Use development mode to use the error handler.
 */

app.configure('development', function(){
  app.use(express.errorHandler());
});
var routes = require('./routes');
app.get('/', routes.index);
app.get('/delete/:id', routes.remove);
app.post('/create', routes.create);

console.log("Creating HTTP server..");

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});