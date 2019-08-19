'use strict';

const titles = document.getElementById('title');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/titles');

xhr.onload = function() {
  const result = JSON.parse(xhr.response);
  for (let i = 0; i < result.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = result[i].book_name;
    titles.appendChild(listItem);
  }
};

xhr.send();
