import Bowerman from '../../src/characters/Bowerman.js';

test('should create a Bowerman character', () => {
	const character = new Bowerman('Archer');
	expect(character).toEqual({
		name: 'Archer',
		type: 'Bowman',
		health: 100,
		level: 1,
		attack: 25,
		defence: 25,
	});
});