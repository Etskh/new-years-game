const fs = require('fs');
const express = require('express');

const app = express();

const config = {
  name: 'new-year-game',
  port: process.env.PORT || 3000,
  appId: process.env.FACEBOOK_APP_ID || null,
};

app.use(express.static('public'));

app.get('/', (req, res) => {
  let page = fs.readFileSync('./templates/index.html').toString();
  page = page.replace('{{appId}}', config.appId );
  res.send(page);
});

app.get('/privacy', (req, res) => {
  let page = fs.readFileSync('./templates/privacy.html').toString();
  res.send(page);
});

app.get('/terms-of-service', (req, res) => {
  let page = fs.readFileSync('./templates/terms.html').toString();
  res.send(page);
});

app.listen(config.port, function() {
  console.log(`Starting app on port ${config.port}`);
});
