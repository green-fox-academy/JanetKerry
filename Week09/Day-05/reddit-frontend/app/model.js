'use strict';

const API_BASE_URL = 'http://secure-reddit.herokuapp.com/posts';

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();

const getTopics = callBack => {
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      let result = [];

      for (let i = 0; i < response.posts.length; ++i) {
        result.push(parseTopic(response.posts[i]));
      }
      callBack(result);
    } else {
      callBack(null);
    }
  };

  xhr.open('GET', API_BASE_URL);
  xhr.send();
};

const parseTopic = topic => {
  let owner = topic.owner || 'anonymous';
  const secondsPassed = Date.now() - topic.timestamp;

  return {
    id: topic.id,
    title: topic.title,
    url: topic.url,
    timestamp: topic.timestamp,
    score: topic.score,
    user: owner,
    vote: topic.vote,
    secondsPassed: secondsPassed
  };
};

module.exports = {
  getTopics
};
