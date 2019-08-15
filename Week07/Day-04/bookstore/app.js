'use strict';

const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'Keruborocks247',
  database: 'bookstore'
});

const app = express();

app.get('/book_mast', (req, res) => {
  connection.query('SELECT * FROM bookstore;', (err, rows) => {
    res.send(rows);
  });
});

// app.get('/book-mast/:id', (req, res) => {
//   connection.query(
//     'select * from bookstore where id = ?;',
//     req.params.id,
//     (err, rows) => {
//       res.send(rows[0]);
//     }
//   );
// });

app.listen(3000);
