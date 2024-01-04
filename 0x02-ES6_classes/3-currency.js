export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'Code');
    this._name = this._validateString(name, 'Name');
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this._validateString(newCode, 'Code');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation function for strings
  // eslint-disable-next-line class-methods-use-this
  _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }
}
