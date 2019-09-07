'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');
​
test('/groot endpoint1', (t) => {
    request (app)
  .get('/groot?somemessage=Grootonthedecks')
  .set('accept', 'application/json')
  end((err, resp)=>{
    if (err) throw err;
    t.equal(resp.status, 200);
    t.same(resp.body, {
        "received": "Grootonthedecks",
        "translated": "I am Groot!"
    });
    t.end();
});
});
