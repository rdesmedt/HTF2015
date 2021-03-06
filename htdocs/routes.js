var home = require('./home/home');
var member = require('./member/member');
var quiz = require('./quiz/quiz')

module.exports = function(app) {

  app.get('/', home.getIndex);
  app.get('/member', member.getRegistration);
  app.get('/member/list', member.getMemberList);

  app.post('/member/registration', member.postRegistration);

  app.get('/quiz', quiz.getIndex);
};