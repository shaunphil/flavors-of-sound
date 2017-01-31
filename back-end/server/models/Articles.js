const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

var ArticleSchema = new mongoose.Schema({
  title:         String,
  slug:          String,
  subtitle:      String,
  author:        String,
  bodyFileURL:   String,
  bodyHTML:      String,
  photoName:     String,
  datePublished: Date,
  intro:         String,
});

ArticleSchema.methods.resolveBodyHTML = function(done) {
  fs.readFile(path.join(__dirname, '../article-bodies', this.bodyFileURL), (error, data) => {
    if (error) return done(error);
    this.bodyHTML = data.toString();
    done(null);
  });
}

module.exports = mongoose.model('Article', ArticleSchema);
