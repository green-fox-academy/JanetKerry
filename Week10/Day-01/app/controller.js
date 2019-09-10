'use strict';

// TODO: use model instead of mock
//const model = require('./model');
const model = require('./modelMock');

function index(req, res) {
  res.render('index', {});
}

function GET_playlist_tracks(req, res) {
  return model.getPlaylistTracks(req.query.playlist_id);
}

module.exports = {
  index,
  GET_playlist_tracks
};
