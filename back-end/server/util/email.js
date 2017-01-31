const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    name: 'spwassel01@gmail.com',
    pass: 'goateeman032694'
  }
});

module.exports = (options, callback) => {
  let mailOptions = {
    from:    options.from,
    to:      options.to,
    subject: options.subject,
    text:    options.text,
    html:    options.html
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return callback(error);
    console.log('Message %s sent: %s', info.messageId, info.response);
    return callback(null);
  });
}
