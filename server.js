const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hello World');
});

app.get('/me', (req, res) => {
  res.send({
    name: "Osemeke",
    country: "Finland",
    hobby: "music"
  });
});

app.listen(3000, () => {
  console.log(`Server up on port 3000...`)
})