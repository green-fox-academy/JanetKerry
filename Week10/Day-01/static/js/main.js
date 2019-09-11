'use strict';
const xhr = new XMLHttpRequest();

const playlists = () => {
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const playlists = document.querySelector('#playlists');
      response.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.playlist;
        playlists.appendChild(div);
        div.onclick = () => {
          tracks(item.playlist_id);
        };
      });
    }
  };

  xhr.open('GET', '/playlist');
  xhr.send();
};
playlists();

const tracks = playlistId => {
  xhr.onload = () => {
    if (xhr.status === 200) {
      const tracks = document.querySelector('.tracks');
      while (tracks.childElementCount != 0) {
        tracks.removeChild(tracks.lastChild);
      }

      const response = JSON.parse(xhr.responseText);
      response.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.title;
        tracks.appendChild(div);
        div.onclick = () => {};
      });
    }
  };
  if (playlistId) {
    xhr.open('GET', '/playlists_tracks?playlist_id=' + playlistId);
  } else {
    xhr.open('GET', '/playlists_tracks');
  }
  xhr.send();
};

playlistsId();
tracks();
