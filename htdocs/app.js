'use strict';

var express = require('express'),
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    mysql = require('mysql'),
    config = require('./config/mongoConfig'),
    connection = mysql.createConnection({
      host: '173.194.105.180',
      user: 'student',
      password: 'mulestudent',
      database: 'training'
    });

var app = express();

connection.connect(function(err){
  if (err) console.log(err.stack);
  console.log(connection.threadId);
});

app.set('dbUrl', config.db.development);
mongoose.connect(app.get('dbUrl'));

app.set('views engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/css', express.static(__dirname + '/public/css'));

routes(app);

app.listen(4000, function() {
  console.log('****', 'started on port', 4000);
});