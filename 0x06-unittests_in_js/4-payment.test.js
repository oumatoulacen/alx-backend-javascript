const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    beforeEach(() => {
      consoleSpy = sinon.spy(console, 'log');
    });
  
    afterEach(() => {
      consoleSpy.restore();
    });
  
    it('logs to the console the right messages', () => {
      expect(consoleSpy.calledOnce).to.be.false;
      sendPaymentRequestToApi(100.6, 131.6)
      expect(consoleSpy.calledWith('The total is: 233')).to.be.true;
    });

    it('checking if numbers round with spies', () => {
        const checkSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(1, 3);
        expect(checkSpy.calledOnce).to.be.true;
        expect(checkSpy.calledWith('SUM', 1, 3)).to.be.true;
        checkSpy.restore();
    });

    it ('checking if numbers round with stubs', () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
        sendPaymentRequestToApi(1, 7);
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 1, 7)).to.be.true;
        consoleSpy.calledWith('The total is: 10');
        stub.restore();
    });
});
