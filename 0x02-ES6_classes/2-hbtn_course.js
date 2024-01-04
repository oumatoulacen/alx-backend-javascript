export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : new Error('name must be a string');
    this._length = typeof length === 'number' ? length : new Error('Length must be a number');
    this._students = Array.isArray(students) ? students : new Error('students must be an array');
  }

  get name() { return this._name; }

  set name(name) { this._name = this._validateString(name); }

  get length() { return this._length; }

  set length(length) { this._length = typeof length === 'number' ? length : new Error('Length must be a number'); }

  get students() { return this._students; }

  set students(value) { this._students = Array.isArray(value) ? value : new Error('students must be an array'); }
}
