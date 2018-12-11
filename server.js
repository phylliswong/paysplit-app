const express = require('express');
const path = require('path');
const app = express();
var mailgun = require("mailgun-js");
var api_key = 'key-b2e232b515e23a91805b4ca0ae9c098a';
var domain = 'sandbox327e859bafc442479e7384439df8c22c.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


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
