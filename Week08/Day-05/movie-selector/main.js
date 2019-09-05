'use strict';
function genreSelected(selectedGenre) {
  let movie = document.getElementById('movie');
  while (movie.children.length > 1) {
    movie.removeChild(movie.lastChild); //removes last child and remains with one
  }
  movie.value = '';
  movieSelected('');

  let movieList = [];

  if (selectedGenre === 'Drama') {
    console.log('I am the drama!');
    movieList.push('Darkest Hour', 'There Will Be Blood');
  } else if (selectedGenre === 'Sci-fi') {
    console.log('I am Sci-Fi');
    movieList.push('Moon', '2001: A Space Odyssey', 'Contact');
  } else if (selectedGenre === 'Comedy') {
    console.log('I am  Comedy');
    movieList.push('American Beauty', 'Airplane', 'Deadpool', "Wayne's World");
  }
  for (let i = 0; i < movieList.length; i++) {
    let option = document.createElement('option');
    option.value = movieList[i];
    option.textContent = movieList[i];
    movie.appendChild(option);
  }
}
//eventlistener for the movie change
function movieSelected(movieName) {
  let movieLabel = document.getElementById('movieDetails');
  if (movieName === '') {
    movieLabel.textContent = '-';
  } else {
    movieLabel.textContent = movieName;
  }
}
