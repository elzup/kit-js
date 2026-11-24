import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.test.ts'],
    testTimeout: 10000,
    coverage: {
      provider: 'istanbul',
      reporter: ['json-summary', 'text', 'lcov'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'src/**/__test__/**'],
    },
  },
})
