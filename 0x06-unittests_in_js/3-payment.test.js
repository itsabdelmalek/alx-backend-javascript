const assert = require('assert');
const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('checking if numbers are round with spies', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 3);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 1, 3)).to.be.true;
    calculateNumberSpy.restore();
  });

  sinon.assert.fail = function (msg) {
    assert.fail(msg);
  };
});
