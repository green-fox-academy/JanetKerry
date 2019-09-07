'use strict';

const express = require('express');
const controller = require('./app/controller');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', controller.index);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
