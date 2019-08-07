const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

const todos = ['get up', 'survive', 'go back to bed'];

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', { todos: todos });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});
