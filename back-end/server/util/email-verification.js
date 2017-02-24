const sendEmail = require('./email.js');
const mongoose  = require('mongoose');
const User      = require('../models/Users');
const TempUser  = require('../models/TempUsers');
const msg       = require('./messages');
const validator = require('email-validator');

exports.sendVerificationEmail = (firstName, email, callback) => {
  var verificationSlug = generateVerificationSlug(48);

  var newTempUser = new TempUser({
    firstName: firstName,
    email: email,
    verificationSlug: verificationSlug
  });

  let messageOptions = {
    from: 'shaun.p.wassell@gmail.com',
    to:    email,
    subject: "Verify Your Subscription",
    body:    "Hello " + firstName + ",\n" +
             "Click here to verify your subscription:\n" +
             "http://localhost:3000/api/email-verification/" + verificationSlug,
    html:    "<p>Hello " + firstName + ",</p>" +
             "<p>Click <a href=http://localhost:3000/api/email-verification/" + verificationSlug +
             ">here</a> to verify your subscription</p>"
  }

  if (!verifyName(firstName)) {
    return callback(null, msg.INVALID_NAME);
  }

  if (!verifyEmail(email)) {
    return callback(null, msg.INVALID_EMAIL);
  }

  User.findOne({ 'email': email }).exec( (error, user) => {
    if (error) return callback(error);
    if (user) {
      return callback(null, msg.USER_ALREADY_EXISTS);
    } else {

      sendEmail(messageOptions, (error) => {
        if (error) return callback(error);

        TempUser.findOne({ 'email': email }).exec( (error, tempuser) => {
          if (error) return callback(error);
          if (!tempuser) {

            newTempUser.save( (error, tempUser) => {
              if (error) return callback(error);
            });
          }
          return callback(null, msg.SUCCESS);
        });
      });
    }
  });
}

function sendConfirmedEmail(firstName, email, callback) {
  let messageOptions = {
    from: 'shaun.p.wassell@gmail.com',
    to:    email,
    subject: "Subscription Verified",
    body:    "Thank you for subscribing! You can unsubscribe at any time.",
    html:    "<p>Thank you for subscribing! You can unsubscribe at any time.</p>"
  }

  sendEmail(messageOptions, callback);
}

exports.verifyUser = (url, callback) => {
  var query = TempUser.findOne({ 'verificationSlug': url });
  query.exec( (error, tempUser) => {
    if (error) return callback(error);

    if (!tempUser) {
      return callback(null, msg.TEMP_USER_NOT_FOUND);
    }

    var newUser = new User({
      firstName: tempUser.firstName,
      email:     tempUser.email
    });

    newUser.save( (error, user) => {
      console.log("Successfully verified user");
      tempUser.remove();
      sendConfirmedEmail(user.firstName, user.email, callback);
    });
  });
}

function generateVerificationSlug(length) {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var token = '';

  for (var i = 0; i < length; i++) {
    token += chars[Math.round(Math.random() * (chars.length - 1))];
  }

  return token;
}

function verifyName(name) {
  return name && name != '';
}

function verifyEmail(email) {
  return validator.validate(email);
}
