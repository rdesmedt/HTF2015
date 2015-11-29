

module.exports = function(app) {

  app.get('/', function(req, res){
    res.status(200).send('Hello, is it me you\'re looking for?');
  });

};