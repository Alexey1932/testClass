import Swordsman from '../../src/characters/Swordsman.js';

test('should create Swordsman with correct properties', () => {
	const swordsman = new Swordsman('Aragorn');
	expect(swordsman.name).toBe('Aragorn');
	expect(swordsman.type).toBe('Swordsman');
	expect(swordsman.attack).toBe(40);
	expect(swordsman.defence).toBe(10);
	expect(swordsman.health).toBe(100);
	expect(swordsman.level).toBe(1);
});