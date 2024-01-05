export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
