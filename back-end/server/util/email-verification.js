const sendEmail = require('./email.js');

exports.sendVerificationEmail = (to, callback) => {
  let messageOptions = {
    from: 'Shaun Wassell <shaun@flavorsofsound.com>',
    to:    to,
    subject: "Verify Your Subscription",
    body:    "Click here to verify your subscription:",
    html:    "<p>Click here to verify your subscription:</p>"
  }
  messageOptions.to = to;


  sendEmail(messageOptions, callback);
}

exports.sendConfirmedEmail = (to, callback) => {
  let messageOptions = {
    from: 'Shaun Wassell <shaun@flavorsofsound.com>',
    to:    to,
    subject: "Subscription Verified",
    body:    "Thank you for subscribing! You can unsubscribe at any time.",
    html:    "<p>Thank you for subscribing! You can unsubscribe at any time.</p>"
  }

  sendEmail(messageOptions, callback);
}
