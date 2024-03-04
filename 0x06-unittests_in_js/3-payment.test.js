const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

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
      expect(consoleSpy.calledOnce).to.be.true;
      sendPaymentRequestToApi(100.6, 131.6)
      expect(consoleSpy.calledWith('The total is: 233')).to.be.true;
    });
});
