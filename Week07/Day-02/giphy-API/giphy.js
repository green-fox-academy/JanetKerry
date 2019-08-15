'use strict';

const API_BASE_URL = 'https://api.giphy.com/v1/gifs/search'; //Search/Find the images in the API
let API_KEY = '3690f5eu5qbE1t4usetk9Y3BJx6SmvqA'; //Obtain an API key
let QUERY_STRING = 'trending';
let LIMIT = 16;

const xhr = new XMLHttpRequest();
const thumbnails = document.querySelector('.thumbnails');

// 1. easier, shorter
// xhr.onload = () => {
//   if (xhr.status === 200) {}

// 2. same thing as 1. but longer
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {}

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       response.data.forEach(e => {
//         const images = document.createElement('img');
//         images.setAttribute('src', e.images.downsized_still.url)
//         thumbnails.appendChild(images);
//         images.onclick = () => {
//           images.setAttribute('src', e.images.downsized.url);
//         }
//       });
//     }
//   }
// };

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    response.data.forEach(e => {
      const images = document.createElement('img');
      //todo:Display the list of the first 16 results's static thumbnail
      //If the user clicks on the thumbnail, display the animated GIF
      images.setAttribute('src', e.images.downsized_still.url);
      thumbnails.appendChild(images);
      images.onclick = () => {
        images.setAttribute('src', e.images.downsized.url);
      };
    });
  }
};

xhr.open(
  'GET',
  `${API_BASE_URL}?api_key=${API_KEY}&q=${QUERY_STRING}&limit=${LIMIT}`
);
xhr.send();
