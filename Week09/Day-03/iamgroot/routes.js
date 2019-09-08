const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.somemessage === undefined) {
    res.status(500);
    res.json({
      error: 'somemessage undefined'
    });
  } else {
    res.json({
      received: req.query.somemessage,
      translated: 'I am Groot!'
    });
  }
});

module.exports = app;
