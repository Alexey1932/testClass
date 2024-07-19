import Daemon from '../../src/characters/Daemon.js';

test('should create Daemon with correct properties', () => {
	const daemon = new Daemon('Azazel');
	expect(daemon.name).toBe('Azazel');
	expect(daemon.type).toBe('Daemon');
	expect(daemon.attack).toBe(10);
	expect(daemon.defence).toBe(40);
	expect(daemon.health).toBe(100);
	expect(daemon.level).toBe(1);
});