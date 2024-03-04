const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  it('should log the correct result', function() {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });
});
