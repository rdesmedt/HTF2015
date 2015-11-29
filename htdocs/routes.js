var home = require('./home/home');

module.exports = function(app) {

  app.get('/', home.getIndex);

};