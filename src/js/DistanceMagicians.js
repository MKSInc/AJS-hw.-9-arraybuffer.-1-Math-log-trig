/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import Character from './Character';

export default class DistanceMagicians extends Character {
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(distance) {
    if (distance > 11) {
      this._magicAttack = 0;
      return;
    }

    const distancePenalty = (11 - distance) / 10;
    const stonedPenalty = this._stoned ? Math.log2(distance) * 5 : 0;
    this._magicAttack = parseFloat((this._basicMagicAttack * distancePenalty - stonedPenalty).toFixed(3));

    if (this._magicAttack < 0) this._magicAttack = 0;
  }

  get attack() {
    return this._magicAttack;
  }
}
