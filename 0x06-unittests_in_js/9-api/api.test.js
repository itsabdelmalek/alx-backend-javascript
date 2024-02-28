const request = require('request');
const { expect } = require('chai');

describe('API', () => {
  it('GET / should return Welcome to the payment system', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id should return Payment methods for cart :id', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('GET /cart/:id with non-number :id should return 404', (done) => {
    request.get('http://localhost:7865/cart/nonumber', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
