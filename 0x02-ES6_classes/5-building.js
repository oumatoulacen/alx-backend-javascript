export default class Building {
  constructor(sqrf) {
    this._sqrt = sqrf;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqrf() {
    return this._sqrf;
  }

  set sqrf(value) {
    this._sqrf = value;
  }
}
