const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
    it('checking if sum operation is correct', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('checking if substract operation is correct', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('checking if division operation is correct', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('checking if division operation is doable', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('checking correct type for operation 1', () => {
        assert.equal(calculateNumber(5, 1, 4), 'Error');
    });
    it('checking correct type for operation 2', () => {
        assert.equal(calculateNumber('plus', 1, 4), 'Error');
    });
});
