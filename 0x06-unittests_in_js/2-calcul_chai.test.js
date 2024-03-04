const chai = require('chai');
const calculateNumber = require('./1-calcul');
const expect = chai.expect;

describe('calculateNumber', function() {
    describe('type SUM', function() {
        it('should return 4', function() {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
        it('should return 5', function() {
            expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
        });
    });
    describe('type SUBTRACT', function() {
        it('should return 2', function() {
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        });
    });
    describe('type DIVIDE', function() {
        it('should return 2', function() {
            expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
        });
        it('should return Error', function() {
            expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
        });
    });
});
