/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/**
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : new Error('name must be a string');
    this._length = typeof length === 'number' ? length : new Error('Length must be a number');
    this._students = Array.isArray(students) ? students : new Error('students must be an array');
  }

  get name() { return this._name; }

  set name(name) { this._name = this._validateString(name); }

  get length() { return this._length; }

  // eslint-disable-next-line max-len, max-len
  set length(length) { this._length = typeof length === 'number' ? length : new Error('Length must be a number'); }

  get students() { return this._students; }

  set students(value) { this._students = Array.isArray(value) ? value : new Error('students must be an array'); }
} */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArray(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }
  
  // Getter and setter for length
  get length() {
    return this._length;
  }
  
  set length(newLength) {
    this._length = this._validateNumber(newLength, 'Length');
  }
  
  // Getter and setter for students
  get students() {
    return this._students;
  }
  
  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'Students');
  }
  
  // Validation functions
  _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }
  
  _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }
  
  _validateArray(value, propertyName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${propertyName} must be an array`);
    }
    return value;
  }
}
