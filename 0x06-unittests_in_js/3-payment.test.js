const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  it('should log the correct result', function() {
    const spy = sinon.spy('Utils', 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
