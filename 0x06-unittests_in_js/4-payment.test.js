const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('checking if numbers are round with stubs', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10');

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
