'use strict';

const API_BASE_URL = 'http://secure-reddit.herokuapp.com/posts';

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();

const getTopics = callBack => {
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      callBack(response);
    } else {
      callBack(null);
    }
  };

  xhr.open('GET', API_BASE_URL);
  xhr.send();
};

module.exports = {
  getTopics
};
