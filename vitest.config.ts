import tsconfigPaths from 'vitest-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    clearMocks: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      include: ['**/src/domain/**/*.ts'],
    },
    include: ['**/tests/**/*.test.ts'],
  },
});
