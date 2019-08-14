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

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
