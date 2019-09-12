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

const playlistplaylistTracks = playlistId => {
  xhr.onload = () => {
    if (xhr.status === 200) {
      const playlistTracks = document.querySelector('.playlistTracks');
      while (playlistTracks.childElementCount != 0) {
        playlistTracks.removeChild(playlistTracks.lastChild);
      }

      const response = JSON.parse(xhr.responseText);
      response.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.title;
        playlistTracks.appendChild(div);
        div.onclick = () => {};
      });
    }
  };
  if (playlistId) {
    xhr.open('GET', `/playlists_playlistTracks?playlist_id=${playlistId}`);
  } else {
    xhr.open('GET', '/playlists_playlistTracks');
  }
  xhr.send();
};

playlistsId();
playlistTracks();
