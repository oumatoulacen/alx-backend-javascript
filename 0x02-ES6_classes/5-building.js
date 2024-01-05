export default class Building {
  constructor(sqrf) {
    this._sqrt = this._validateNumber(sqrf, 'Sqrf');
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter and setter for sqrf
  get sqrf() {
    return this._sqrf;
  }

  set sqrf(sqrf) {
    this._sqrf = this._validateNumber(sqrf, 'Sqrf');
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
