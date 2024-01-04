/* eslint-disable no-unused-vars */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount);
    this._currency = currency;
  }

  // returns the attributes
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = this._validateString(amount, 'Amount');
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = this._validateNumber(currency, 'Currency');
  }

  // Validation function for strings
  // eslint-disable-next-line class-methods-use-this
  _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  // Validation function for number
  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }
}
