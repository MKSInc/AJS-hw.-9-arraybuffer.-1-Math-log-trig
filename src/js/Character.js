/* eslint-disable no-underscore-dangle */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this._magicAttack = undefined;

    if (type === 'Magician' || type === 'Daemon') this._basicMagicAttack = 50;
    else this._basicMagicAttack = 1;
  }
}
