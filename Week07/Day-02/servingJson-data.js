//serving json to the client

let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' }); //what we are sending to the browser
  let myObj = {
    name: 'Ryu',
    job: 'ninja',
    age: '30'
  };
  res: end(JSON.stringify(myObj)); //sending data back to the client
});
server.listen(3000, '127.0.0.1');
console.log('watssup!now listening to port 3000');
