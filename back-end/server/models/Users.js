const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
