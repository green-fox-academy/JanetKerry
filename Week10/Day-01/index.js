'use strict';

const express = require('express');
const controller = require('./app/controller');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json()); //enable to parse req.body !
app.use(express.static('static')); //return without rendering through application

app.get('/', controller.index);

app.get('/playlist-tracks', (req, res) => {
  res.json(controller.GET_playlist_tracks(req, res));
});

app.get('/playlists', (req, res) => {
  res.json(controller.GET_playlists(req, res));
});
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
