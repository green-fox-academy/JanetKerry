'use strict';
//import express
const express = require('express');
//use express
const app = express();
//app  listen on a port
const PORT = 8080;
const path = require('path');
app.use(express.static('assets'));
//render the static index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
//GET /doubling endpoint
// app.get('/doubling', (req, res) => {
//   if (isNaN(parseInt(req.query.input))) {
//     res.json({ error: 'Please provide an input!' });
//   } else {
//     res.json({
//       received: parseInt(req.query.input),
//       result: parseInt(req.query.input) * 2
//     });
//   }
// });

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let result;
  if (isNaN(input) == false) {
    result = {
      received: input,
      result: input * 2
    };
  } else {
    result = {
      error: 'Please provide an input!'
    };
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
