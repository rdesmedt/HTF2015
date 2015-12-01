'use strict';

var Member = require('./memberModel').Member;

exports.getRegistration = function(req, res){
  res.status(200).render(__dirname + '/views/memberRegistration.jade');
};

exports.postRegistration = function(req, res){
  console.log(req.body);
  var member = new Member();
  member.name = req.body.name;
  member.save(req.body, function(err, result){
    if(err) console.log('ERROR: ', err);
    else console.log('RESULT: ', result);
    res.status(200).render(__dirname + '/views/memberRegistration.jade');
  });
};

exports.getMemberList = function(req, res){
  Member.find({}, function(req, members){
    res.status(200).render(__dirname + '/views/memberList.jade', {
      list: members
    });
  })
};