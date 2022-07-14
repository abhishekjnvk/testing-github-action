const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('Ping Server', done => {
        request(app).get('/').expect(200, done);
    });
});

