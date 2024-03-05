const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the calculateNumber function', () => {
        const stub = sinon.stub(Utils, 'calculateNumber')
        stub.returns(10)
        const spy = sinon.spy(console, 'log')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(stub, 'SUM', 100, 20)
        sinon.assert.calledWith(spy, 'The total is: 10');
        stub.restore()
        spy.restore()
    })
})
