const express = require('express');
const path = require('path');
const app = express();
var mailgun = require("mailgun-js");

require('dotenv').config();


var api_key = process.env.MAILGUN_API_KEY;
var domain = 'sandbox327e859bafc442479e7384439df8c22c.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
require('dotenv').config();


const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/paysplit",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to Paysplit Database");
  }
);




const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const Email = require("./models/Email.js");



// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});





  // create a new email
  app.post('/api/emails/new', (req, res) => {
    console.log(req.body)
    let data = {
      from: req.body.email,
      to: 'info.paysplit@gmail.com',
      subject: req.body.subject,
      text: req.body.body,
    };

      mailgun.messages().send(data, function (error, body) {
        if (error) {
          console.log('error: ' + error)
        }
        console.log(body);
        res.redirect('/')
      });
  })


  // join email list
  app.post('/api/emails/join',  (req, res) => {
    let email = new Email()
    email.email = req.body.email;
    email.save().then((email) => {
      res.redirect('/thanks');
    });
  });




if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}




// SEVER
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}`));
