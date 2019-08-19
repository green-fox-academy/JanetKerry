'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Keruborocks247',
  database: 'bookstore'
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }
});

app.get('/titles', (req, res) => {
  connection.query('SELECT book_name FROM book_mast; ', (err, rows) => {
    if (err) {
      res.status(500);
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.get('/fullList', (req, res) => {
  connection.query(
    'SELECT book_name, aut_name, cate_descrip, pub_name, book_price ' +
      'FROM book_mast inner join author on book_mast.aut_id = author.aut_id ' +
      'inner join category on book_mast.cate_id= category.cate_id ' +
      'inner join publisher on book_mast.pub_id= publisher.pub_id; ',
    (err, rows) => {
      res.send(rows);
    }
  );
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/app/titles.js', (req, res) => {
  res.sendFile(__dirname + '/app/titles.js');
});
app.get('/static/titleslist.html', (req, res) => {
  res.sendFile(__dirname + '/static/titleslist.html');
});
app.get('/static/fulllist.html', (req, res) => {
  res.sendFile(__dirname + '/static/fulllist.html');
});
app.get('/app/fullList.js', (req, res) => {
  res.sendFile(__dirname + '/app/fullList.js');
});

app.listen(3000, () => console.log('Listening on port 3000'));
