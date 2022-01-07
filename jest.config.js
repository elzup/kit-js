module.exports = {
  moduleFileExtensions: ['ts', 'js'],

  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
      },
    ],
  },

  testMatch: ['**/*.test.ts'],
}
