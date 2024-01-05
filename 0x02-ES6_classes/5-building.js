export default class Building {
  constructor(sqrf) {
    this._sqrt = sqrf;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter and setter for sqrf
  get sqrf() {
    return this._sqrf;
  }

  set sqrf(sqrf) {
    this._sqrf = sqrf;
  }

}
