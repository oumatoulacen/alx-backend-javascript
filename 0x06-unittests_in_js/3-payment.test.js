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
      sendPaymentRequestToApi(100, 131)
      sendPaymentRequestToApi(100.3, 131.3)
      sendPaymentRequestToApi(100.6, 131.3)
      sendPaymentRequestToApi(100.3, 131.6)
      sendPaymentRequestToApi(100.6, 131.6)
  
      expect(consoleSpy.calledWith('The total is: 231')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 231')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 232')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 232')).to.be.true;
      expect(consoleSpy.calledWith('The total is: 233')).to.be.true;
    });
});
