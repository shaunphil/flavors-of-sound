const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/Articles');
const Category = require('../models/Categories');
const User = require('../models/Users');
const TempUser = require('../models/TempUsers');
const ev = require('../util/email-verification');

router.get('/categories', (request, response, next) => {
  Category.find( (error, categories) => {
    if (error) return next(error);
    console.log(categories);
    response.json(categories);
  });
});

router.get('/categories/:slug', (request, response, next) => {
  var query = Category.findOne( { 'slug' : request.params.slug });
  query.exec( (error, category) => {
    if (error) return next(error);
    category.populate('articles', (error, category) => {
      if (error) return next(error);
      response.json(category);
    });
  })
});

router.get('/articles', (request, response, next) => {
  Article.find( (error, articles) => {
    if (error) return next(error);
    response.json(articles);
  });
});

router.get('/articles/:slug', (request, response, next) => {
  var query = Article.findOne( { 'slug' : request.params.slug });
  query.exec( (error, article) => {
    if (error) return next(error);
    article.resolveBodyHTML( (error) => {
      if (error) return next(error);
      response.json(article);
    });
  });
});

router.post('/temp-users', (request, response, next) => {
  ev.sendVerificationEmail('shaun.p.wassell@gmail.com', (error) => {
    if (error) return console.log(error);
    return console.log("Success!");
    response.status(200).end();
  });
});

router.get('email-verification/:url', (request, response, next) => {

});

module.exports = router;
