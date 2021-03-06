var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var eventSchema = new mongoose.Schema({
  title: { type: String, default: ''},
  organizer: String,
  description: { type: String, default: ''},
  location: { type: String, default: ''},
  day: { type: String },
  length: Number, 
  users: [String]
});

/**
 * Hash the password for security.
 * "Pre" is a Mongoose middleware that executes before each user.save() call.
 */

module.exports = mongoose.model('Event', eventSchema);
