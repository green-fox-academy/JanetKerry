'use strict';

// TODO: use model instead of mock
//const model = require('./model');
const model = require('./modelMock'); //routing res and req from .js &connecting model to the views

function index(req, res) {
  res.render('index', {});
}

function GET_playlist_tracks(req, res) {
  return model.getPlaylistTracks(req.query.playlist_id);
}
function index(req, res) {
  res.render('index', {});
}

function GET_playlists(req, res) {
  return model.getPlaylists();
}

module.exports = {
  index,
  GET_playlists,
  GET_playlist_tracks
};
