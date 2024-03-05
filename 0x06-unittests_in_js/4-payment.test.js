const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');
const Utils = require('./utils.js');

const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
    let calculateNumberStub;
    let consoleLogSpy;
  
    beforeEach(function() {
      calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
      consoleLogSpy = sinon.spy(console, 'log');
    });
  
    afterEach(function() {
      calculateNumberStub.restore();
      consoleLogSpy.restore();
    });
  
    it('should call Utils.calculateNumber with correct arguments', function() {
      sendPaymentRequestToApi(100, 20);
      expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });
  
    it('should log correct message', function() {
      sendPaymentRequestToApi(100, 20);
      expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
  });
  