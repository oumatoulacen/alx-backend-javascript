const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    calculateNumberStub.restore();
  });
});
