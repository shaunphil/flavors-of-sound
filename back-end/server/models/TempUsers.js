const mongoose = require('mongoose');

var TempUserSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  verificationSlug: String
});

module.exports = mongoose.model('TempUser', TempUserSchema);
