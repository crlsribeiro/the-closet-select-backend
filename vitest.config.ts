import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['amplify/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['amplify/**/*.ts'],
      exclude: ['amplify/**/*.test.ts', 'amplify/backend.ts', 'amplify/**/resource.ts'],
    },
  },
});
