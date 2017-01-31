const mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  name: String,
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }]
});

module.exports = mongoose.model('Category', CategorySchema);
