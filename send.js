require('dotenv').load();

// load mail template
const defaultEmailTemplate = require('./templates/default.js');

// load aws sdk
var aws = require('aws-sdk');

// aws ses config
var ses = new aws.SES({
  apiVersion: process.env.AWS_API_VERSION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// aws ses vars
const to = [ process.env.EMAIL_TO ]
const from = process.env.EMAIL_FROM

var params = {
  Destination: {
    ToAddresses: [
      process.env.EMAIL_TO
    ]
  },
  Message: {
    Body: {
      Html: {
        Data: defaultEmailTemplate(),
      },
      Text: {
        Data: 'STRING_VALUE',
      }
    },
    Subject: {
      Data: 'STRING_VALUE',
    }
  },
  Source: process.env.EMAIL_FROM,
  ReplyToAddresses: [
    process.env.EMAIL_REPLYTO,
  ]
};

ses.sendEmail(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
