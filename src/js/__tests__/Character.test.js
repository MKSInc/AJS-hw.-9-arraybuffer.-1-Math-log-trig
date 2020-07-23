import Character from '../Character';

test('Daemon type must have _basicMagicAttack = 50', () => {
  const result = new Character('Mag', 'Daemon');
  expect(result).toHaveProperty('_basicMagicAttack', 50);
});

test('Non-magic type must have _basicMagicAttack = 1', () => {
  const result = new Character('Mag', 'Bowerman');
  expect(result).toHaveProperty('_basicMagicAttack', 1);
});
