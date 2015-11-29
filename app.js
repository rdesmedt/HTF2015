'use strict';

var express = require('express');
var routes = require('./routes')

var app = express();

routes(app);

app.listen(8000, function() {
  console.log('****', 'started on port', 8000);
});