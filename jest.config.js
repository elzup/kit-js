module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],

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
