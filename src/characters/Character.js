export default class Character {
	constructor(name, type) {
		const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

		if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
			throw new Error('Name must be a string with length between 2 and 10 characters.');
		}

		if (!types.includes(type)) {
			throw new Error(`Type must be one of the following: ${types.join(', ')}.`);
		}

		this.name = name;
		this.type = type;
		this.health = 100;
		this.level = 1;
		this.attack = 0;
		this.defence = 0;
	}

	levelUp() {
		if (this.health <= 0) {
			throw new Error('Cannot level up a dead character');
		}

		this.level += 1;
		this.attack = Math.round(this.attack * 1.2);
		this.defence = Math.round(this.defence * 1.2);
		this.health = 100;
	}

	damage(points) {
		if (this.health <= 0) return;

		const damage = points * (1 - this.defence / 100);
		this.health = Math.max(this.health - damage, 0);
	}
}