const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('type SUM', function() {
        it('should return 4', function() {
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        });
        it('should return 5', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
        });
    });
    describe('type SUBTRACT', function() {
        it('should return 2', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
        });
        it('should return 3', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1.4), 3);
        });
    });
    describe('type DIVIDE', function() {
        it('should return 5', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
        });
        it('should return 4', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 12, 2.5), 4);
        });
        it('should return Error', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
        });
    });
});
