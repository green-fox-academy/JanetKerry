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
//GET /greeter endpoint
// query string
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let greeting = {};
  if (name == undefined || title == undefined) {
    greeting = {
      error: 'Please provide a name and a title!'
    };
  } else {
    greeting = {
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    };
  }
  res.send(greeting);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
