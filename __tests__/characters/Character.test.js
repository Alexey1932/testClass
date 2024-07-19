import Character from '../../src/characters/Character.js';

describe('Character class', () => {
	test('should throw an error for name shorter than 2 characters', () => {
		expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters.');
	});

	test('should throw an error for name longer than 10 characters', () => {
		expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters.');
	});

	test('should throw an error for invalid type', () => {
		expect(() => new Character('John', 'InvalidType')).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
	});

	test('should create a character with valid name and type', () => {
		const character = new Character('John', 'Bowman');
		expect(character.name).toBe('John');
		expect(character.type).toBe('Bowman');
		expect(character.health).toBe(100);
		expect(character.level).toBe(1);
		expect(character.attack).toBe(0);
		expect(character.defence).toBe(0);
	});

	test('should level up character correctly', () => {
		const character = new Character('John', 'Bowman');
		character.attack = 25;
		character.defence = 25;

		character.damage(50); 
		character.levelUp();

		expect(character.level).toBe(2);
		expect(character.attack).toBe(30); 
		expect(character.defence).toBe(30); 
		expect(character.health).toBe(100);
	});

	test('should throw error on level up if health is 0', () => {
		const character = new Character('John', 'Bowman');
		character.damage(100); // Make health 0
		expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
	});

	test('should calculate damage correctly', () => {
		const character = new Character('John', 'Bowman');
		character.attack = 25;
		character.defence = 25;

		character.damage(50); 

		expect(character.health).toBeCloseTo(62.5); 
	});

	test('should not decrease health below 0', () => {
		const character = new Character('John', 'Bowman');
		character.attack = 25;
		character.defence = 25;

		character.damage(200); 

		expect(character.health).toBe(0); 
	});

	test('should not apply damage if health is already 0', () => {

		const character = new Character('John', 'Bowman');
		character.damage(100); 
		expect(character.health).toBe(0);
		character.damage(50);
		expect(character.health).toBe(0); 
	});

	test('should not apply damage if health is already 0', () => {
		const character = new Character('John', 'Bowman');
		character.attack = 25;
		character.defence = 25;

		character.damage(100); 
		character.damage(50); 

		expect(character.health).toBe(0); 
	});
});