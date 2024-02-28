const request = require('request');
const { expect } = require('chai');

describe('API', () => {
  it('GET /login endpoint', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: { userName: 'JohnDoe' },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome JohnDoe');
      done();
    });
  });

  it('GET /available_payments endpoint', (done) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:7865/available_payments',
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const parsedBody = JSON.parse(body);
      expect(parsedBody).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });

  after(() => {
    process.exit();
  });
});
