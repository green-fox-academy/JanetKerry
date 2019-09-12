const express = require('express');
const mysql = require('mysql');
const PORT = 3000;
const app = express();

const connection = mysql.createConnection({
  //creating connection
  host: 'localhost',
  user: 'root',
  password: 'password',
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
  connection.query(`SELECT * FROM playlists;`, (err, rows) => {
    if (err) {
      res.status(500);
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});
app.post('/playlist', (req, res) => {
  connection.query(
    `INSERT INTO playlists (playlist,system) VALUES (?, 0);`,
    req.post.playlist,
    (err, rows) => {
      if (err) {
        res.sendstatus(500);
        -//add send after.
        console.log(err);
      } else {
        res.sendstatus(200);
      }
    }
  );
});

app.delete('/playlist', (req, res) => {
  if (req.query.id === undefined || isNaN(Number.parseInt(req.query.id))) {
    res.sendStatus(400);
  } else {
    connection.query(
      `DELETE FROM playlists WHERE id= ${req.query.id} and system <>1;`, //validate variables
      (err, rows) => {
        if (err) {
          res.sendStatus(500);
          console.log(err);
          res.send(); //no params just send
        } else {
          res.sendStatus(200);
        }
      }
    );
  }
});

app.get('/playlists_tracks', (req, res) => {
  let query = 'SELECT * FROM tracks';
  if (
    req.query &&
    req.query.playlist_id &&
    !isNaN(Number.parseInt(req.query.playlist_id))
  ) {
    query += ` WHERE playlist_id=${req.query.playlist_id}`;
  }
  query += ';';

  connection.query(query, (err, rows) => {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      res.send(); //no params just send
    } else {
      res.send(rows);
    }
  });
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`)); //postman, validation, question mark, send resp
