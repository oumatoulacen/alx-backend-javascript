export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name);
    this._length = this._validateNumber(length);
    this._students = this._validateArray(students);
  }

  get name() { return this._name; }

  set name(name) { this._name = this._validateString(name); }

  get length() { return this._length; }

  set length(length) { this._validateNumber(length); }

  get students() { return this._students; }

  set students(value) { this._students = this._validateArray; }

  // Validation functions
  // eslint-disable-next-line class-methods-use-this
  _validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('studens must be an array');
    }
    return value;
  }
}
