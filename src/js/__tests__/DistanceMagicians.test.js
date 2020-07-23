import DistanceMagicians from '../DistanceMagicians';

class Magician extends DistanceMagicians {
}

test('Should be a name property', () => {
  const result = new Magician('Mag', 'Magician');
  expect(result).toHaveProperty('name', 'Mag');
});

test('Should be a _stoned property', () => {
  const result = new Magician('Mag', 'Magician');
  expect(result).toHaveProperty('_stoned', false);
});

test('Should be a get/set stoned property', () => {
  const result = new Magician('Mag', 'Magician');
  result.stoned = true;
  expect(result.stoned).toBeTruthy();
});

test('Should be a get/set attack property', () => {
  const result = new Magician('Mag', 'Magician');
  result.attack = 1;
  expect(result.attack).toBe(50);
});

test('should be an attack penalty per distance - 2 ', () => {
  const result = new Magician('Mag', 'Magician');
  result.attack = 2;
  expect(result.attack).toBe(45);
});

test('should be an attack penalty per distance - 10 ', () => {
  const result = new Magician('Mag', 'Magician');
  result.attack = 10;
  expect(result.attack).toBe(5);
});

test('Aattack should not be negative', () => {
  const result = new Magician('Mag', 'Magician');
  result.stoned = true;
  result.attack = 9;
  expect(result.attack).toBe(0);
});

test('should be an attack penalty per distance - 12 ', () => {
  const result = new Magician('Mag', 'Magician');
  result.attack = 12;
  expect(result.attack).toBe(0);
});

test('should be an stoned penalty per distance - 2 ', () => {
  const result = new Magician('Mag', 'Magician');
  result.stoned = true;
  result.attack = 2;
  expect(result.attack).toBe(40);
});
