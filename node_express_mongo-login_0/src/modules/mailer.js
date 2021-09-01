const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lucascamachowebUTFPR@gmail.com',
    pass: '147258369web2'
  }
});

module.exports = transport;