'use strict';

const model = require('./model');

function index(req, res) {
  model.getTopics(results => {
    console.log('rendering index');
    res.render('index', { results });
  });
}

module.exports = {
  index
};
