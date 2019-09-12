module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'jsx', 'json'],
    moduleDirectories: [
        "src",
        "node_modules"
      ],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
      '<rootDir>/src/tests/cli.test.js'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };