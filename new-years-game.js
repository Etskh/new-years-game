const fs = require('fs');
const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
  const page = fs.readFileSync('templates/index.html');
  res.send(page.toString());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});