const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.somemessage === undefined) {
    res.json({
      error: 'I am Groot!'
    });
  } else {
    res.json({
      received: 'somemessage',
      translated: 'I am Groot!'
    });
  }
});

module.exports = app;
