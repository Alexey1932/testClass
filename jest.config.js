module.exports = {
	testEnvironment: 'node',
	moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
	moduleDirectories: ['node_modules', 'src'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'src/**/*.js',
		'!src/index.js',
	],
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
	},
};