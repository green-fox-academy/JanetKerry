'use strict';

const API_BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
let API_KEY = 'kCRNxfJW7eXYdqGTzax7QteHUBQNCfOV'; //Obtain an API key

const filter = encodeURI('Apollo 11');

const xhr = new XMLHttpRequest();
const articles = document.querySelector('.articles'); //will append children to it because it is an existing element in html

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    response.response.docs.forEach(e => {
      const article = document.createElement('div');
      article.innerText = e.headline.main;
      articles.appendChild(article);
    });
  }
};

xhr.open('GET', `${API_BASE_URL}?api-key=${API_KEY}&q=${filter}`);
xhr.send();
