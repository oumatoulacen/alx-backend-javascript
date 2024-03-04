const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('type SUM', function() {
        it('should return 4', function() {
            assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
        });
        it('should return 5', function() {
            assert.strictEqual(calculateNumber(1.4, 3.5, 'SUM'), 5);
        });
    });
    describe('type SUBTRACT', function() {
        it('should return 2', function() {
            assert.strictEqual(calculateNumber(3, 1, 'SUBTRACT'), 2);
        });
        it('should return 3', function() {
            assert.strictEqual(calculateNumber(3.5, 1.4, 'SUBTRACT'), 3);
        });
    });
    describe('type DIVIDE', function() {
        it('should return 5', function() {
            assert.strictEqual(calculateNumber(10, 2, 'DIVIDE'), 5);
        });
        it('should return 4', function() {
            assert.strictEqual(calculateNumber(12, 2.5, 'DIVIDE'), 4);
        });
        it('should return Error', function() {
            assert.strictEqual(calculateNumber(10, 0, 'DIVIDE'), 'Error');
        });
    });
});
