const fs = require('fs');
const express = require('express');

const app = express();

const config = {
    name: 'portfolio',
    default_port: 3000,
};
config.port = process.env.PORT || config.default_port;


app.use(express.static('public'));

app.get('/', (req, res) => {
  const page = fs.readFileSync('./templates/index.html');
  res.send(page.toString());
});

app.listen(config.port, function() {
  console.log(`Starting app on port ${config.port}`);
});