const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');
const assert = require("assert");


describe('sendPaymentRequestToApi', () => {
    it("check that Utils.calculateNumber is stubbed", function() {
        const spy = sinon.spy(console, "log");
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
    
        assert(spy.withArgs("The total is: 10").calledOnce);
        assert(stub.withArgs("SUM", 100, 20).calledOnce);
        });
});
