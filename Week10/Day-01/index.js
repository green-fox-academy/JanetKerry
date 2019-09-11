const express = require('express');
const mysql = require('mysql');
const PORT = 3000;
const app = express();

const connection = mysql.createConnection({
  //creating connection
  host: 'localhost',
  user: 'root',
  password: 'Keruborocks247',
  database: 'foxplayer'
});

app.set('view engine', 'ejs');
app.use(express.json()); //enable to parse req.body !
app.use(express.static('static')); //return without rendering through application

app.get('/', (req, res) => {
  console.log('rendering index');
  res.render('index');
});

app.get('/playlist', (req, res) => {
  // let playlistPromise = new Promise((resolve, reject) => {--why is it even here??????
  connection.query(`SELECT * FROM playlists;`, (err, rows) => {
    if (err) {
      res.status(500);
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});
//});
app.post('/playlist', (req, res) => {
  connection.query(
    `INSERT INTO playlists (playlist,system) VALUES ('${req.post.playlist}',0);`,
    (err, rows) => {
      if (err) {
        res.status(500);
        console.log(err);
      } else {
        res.status(200);
      }
    }
  );
});

app.delete('/playlist', (req, res) => {
  connection.query(
    `DELETE FROM playlists WHERE id= ${req.query.id} and system <>1;`,
    (err, rows) => {
      if (err) {
        res.status(500);
        console.log(err);
        res.send(JSON.stringify({ error: 'Database error occured!' }));
      } else {
        res.status(200);
      }
    }
  );
});

app.get('/playlists_tracks', (req, res) => {
  let query = 'SELECT * FROM tracks';
  if (req.query && req.query.playlist_id) {
    query = `${query} WHERE playlist_id=${req.query.playlist_id}`;
  }
  query += ';';

  connection.query(query, (err, rows) => {
    res.send(rows);
  });
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
