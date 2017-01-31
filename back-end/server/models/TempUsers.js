const mongoose = require('mongoose');

var TempUserSchema = new mongoose.Schema({
  email: String,
  password: String,
  GENERATED_VERIFYING_URL: String
});

module.exports = mongoose.model('TempUser', TempUserSchema);
