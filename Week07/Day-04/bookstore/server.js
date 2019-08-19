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

app.get('/book', (req, res) => {
  connection.query(
    'SELECT book_name, author.aut_name, category.cate_descrip, pub_name, book_price ' +
      'FROM book_mast inner join author on book_mast.aut_id = author.aut_id ' +
      'inner join category on book_mast.cate_id= category.cate_id ' +
      'inner join publisher on book_mast.pub_id= publisher.pub_id; ',
    (err, rows) => {
      res.send(rows);
    }
  );
});

app.listen(3000);
