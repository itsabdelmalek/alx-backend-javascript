const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API', () => {
  describe('GET /', () => {
    it('Correct status code?', (done) => {
      request('http://localhost:7865', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result?', (done) => {
      request('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('Other?', (done) => {
      done();
    });
  });
});
