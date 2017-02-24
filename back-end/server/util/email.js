var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var msg = require('./messages.js');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
  auth: {
    api_key: 'key-067e965b571a6be944dbb7a85b978ed8',
    domain: 'mg.shaunwassell.com'
  }
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = (options, callback) => {
  nodemailerMailgun.sendMail({
    from: options.from,
    to:   options.to,
    subject: options.subject,
    text: options.text,
    html: options.html
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
      callback(err);
    } else {
      console.log('Response: ' + info);
      callback(null, msg.SUCCESS);
    }
  });
}
