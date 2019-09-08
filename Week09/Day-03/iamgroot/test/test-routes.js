'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint happypath', t => {
  request(app)
    .get('/groot?somemessage=Grootonthedecks')
    .set('accept', 'application/json')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, {
        received: 'Grootonthedecks',
        translated: 'I am Groot!'
      });
      t.end();
    });
});

test('groot endpoint error case', t => {
  request(app)
    .get('/groot')
    .set('accept', 'application/json')
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 500);
      t.same(resp.body, {
        error: 'somemessage undefined'
      });
      t.end();
    });
});
