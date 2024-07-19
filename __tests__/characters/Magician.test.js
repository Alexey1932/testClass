import Magician from '../../src/characters/Magician.js';

test('should create a Magician character', () => {
	const character = new Magician('Mage');
	expect(character.name).toBe('Mage');
	expect(character.type).toBe('Magician');
	expect(character.attack).toBe(10);
	expect(character.defence).toBe(40);
	expect(character.health).toBe(100);
	expect(character.level).toBe(1);
});