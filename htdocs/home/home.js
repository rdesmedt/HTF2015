var jade = require('jade');

exports.getIndex = function(req, res){
  res.status(200).render(__dirname + '/views/home.jade');
};