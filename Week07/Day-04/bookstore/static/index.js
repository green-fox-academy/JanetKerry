const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 
    passw
    database: 'bookstore'
});

connection.query('SELECT * FROM book_mast;', (err, rows) {
    console.log(rows);
});
