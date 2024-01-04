/* eslint-disable no-unused-vars */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'Number');
    this._currency = this._validateCurrency(currency, 'Currency');
  }

  // returns the attributes
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = this._validateNumber(amount, 'Amount');
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = this._validateCurrency(currency, 'Currency');
  }

  // Validation function for number
  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateCurrency(currency, propertyName) {
    if (!(currency instanceof Currency)) { throw new TypeError(`${propertyName} must be of type Currency`); }
    return currency;
  }
}
