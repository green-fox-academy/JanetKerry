'use strict';

const API_BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
let API_KEY = '3690f5eu5qbE1t4usetk9Y3BJx6SmvqA'; //Obtain an API key

const filterQuery = 'the moon landing by Apollo 11';

const xhr = new XMLHttpRequest();
const articles = document.querySelector('.articles'); //will append children to it because it is an existing element in html

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    response.data.forEach(e => {
      const article = document.createElement('div');
      article.innerText = e.headline.main;
      articles.appendChild(article);
    });
  }
};

xhr.open('GET', `${API_BASE_URL}?api_key=${API_KEY}&fq=${filterQuery}`);
xhr.send();
