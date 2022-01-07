module.exports = {
  moduleFileExtensions: ['ts', 'js'],

  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },

  testMatch: ['**/*.test.ts'],
}
