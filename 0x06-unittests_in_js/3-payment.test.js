const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  it('should log the correct result', function() {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledOnceWith('The result is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
