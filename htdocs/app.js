'use strict';

var express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser');

var app = express();

app.set('views engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/css', express.static(__dirname + '/public/css'));

routes(app);

app.listen(4000, function() {
  console.log('****', 'started on port', 4000);
});