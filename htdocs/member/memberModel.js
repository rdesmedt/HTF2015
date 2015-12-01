/**
 * Created by Roeland on 01/12/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
  name: String
});

exports.Member = mongoose.model('Member', memberSchema);