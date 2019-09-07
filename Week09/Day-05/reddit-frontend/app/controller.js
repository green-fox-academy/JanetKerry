'use strict';

//const model = require('./model');

function index(req, res) {
  console.log('rendering index');
  res.render('index', {});
}

module.exports = {
  index
};
