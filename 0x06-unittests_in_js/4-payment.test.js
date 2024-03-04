const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    spy.restore();
    calculateNumberStub.restore();
  });
});
