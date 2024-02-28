const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checking if numbers are round', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('checking if numbers are round 2nd round', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('checking if numbers are round 3rd round', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('checking if numbers are round 4th round', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('checking the negative return', () => {
        assert.equal(calculateNumber(-1.3, -3.7), -5);
      });
});
