const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/Articles');
const Category = require('../models/Categories');
const User = require('../models/Users');
const TempUser = require('../models/TempUsers');
const ev = require('../util/email-verification');
const msg = require('../util/messages');

router.get('/categories', (request, response, next) => {
  Category.find( (error, categories) => {
    if (error) return next(error);
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
  firstName = request.body.firstName;
  email     = request.body.email;
  ev.sendVerificationEmail(firstName, email, (error, message) => {
    if (error) {
      console.log(error.message);
      return response.status(200).end();
    }

    if (message === msg.SUCCESS) {
      console.log("Email has been sent to " + email);
      return response.status(200).json({ message: message});
    } else if (message === msg.USER_ALREADY_EXISTS) {
      console.log("User already exists");
      return response.status(200).json({ message: message });
    } else if (message === msg.INVALID_EMAIL) {
      console.log("Invalid email");
      return response.status(200).json({ message: message });
    } else if (message === msg.INVALID_NAME) {
      console.log("Invalid name");
      return response.status(200).json({ message: message });
    } else if (!message) {
      console.log("ERROR: ALL CALLBACKS MUST BE PASSED A MESSAGE");
    }
  });
});

router.get('/email-verification/:url', (request, response, next) => {
  ev.verifyUser(request.params.url, (error) => {
    if (error) return response.status(200).end();
    console.log("User has been verified");
    return response.redirect('/thank-you');
  });
});

module.exports = router;
