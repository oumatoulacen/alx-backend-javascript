const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  const checkSoy = sinon.spy(console, 'log');
  it('checking if numbers round with spies and stubs', () => {
    sendPaymentRequestToApi(100, 20);
    const stubBoy = sinon.stub(Utils, 'calculateNumber');
    stubBoy.withArgs('SUM', 100, 20).returns(120);
    expect(checkSoy.calledOnce).to.be.true;
    expect(console.log('The total is: 120')).to.be.all;
    checkSoy.restore();
    stubBoy.restore();
  });
});
