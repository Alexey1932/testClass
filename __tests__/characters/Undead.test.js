import Undead from '../../src/characters/Undead.js';

test('should create Undead with correct properties', () => {
	const undead = new Undead('Lich');
	expect(undead.name).toBe('Lich');
	expect(undead.type).toBe('Undead');
	expect(undead.attack).toBe(25);
	expect(undead.defence).toBe(25);
	expect(undead.health).toBe(100);
	expect(undead.level).toBe(1);
});