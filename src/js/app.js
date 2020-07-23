/* eslint-disable no-console */
// TODO: write your code here
import DistanceMagicians from './DistanceMagicians';

class Magician extends DistanceMagicians {
}

const player1 = new Magician('Mag', 'Magician');

console.log(player1);
console.log('Не одурманен');

for (let i = 1; i < 13; i += 1) {
  player1.attack = i;
  console.log(`Расстояние ${i}: ${player1.attack}`);
}

player1.stoned = true;
console.log('Одурманен');

for (let i = 1; i < 13; i += 1) {
  player1.attack = i;
  console.log(`Расстояние ${i}: ${player1.attack}`);
}
