const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
    it('should call the Utils.calculateNumber() method', () => {
        const spy = sinon.spy(console, 'log');
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
        sendPaymentRequestToApi(1, 9);
        expect(stub.calledOnceWithExactly('SUM', 1, 9)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
        spy.restore();
        stub.restore();
    });
});
