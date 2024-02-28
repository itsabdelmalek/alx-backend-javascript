const chai = require('chai');
const { expect } = chai;
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('checking if sum operation is correct', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('checking if subtract operation is correct', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('checking if division operation is correct', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('checking if division operation is doable', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('checking correct type for operation 1', () => {
    expect(calculateNumber(5, 1, 4)).to.equal('Error');
  });

  it('checking correct type for operation 2', () => {
    expect(calculateNumber('plus', 1, 4)).to.equal('Error');
  });
});
