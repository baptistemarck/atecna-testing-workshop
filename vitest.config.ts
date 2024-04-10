import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    root: './',
    cache: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules/'],
    setupFiles: ['./src/testing/setup.ts'],
    clearMocks: true,
    coverage: {
      provider: 'v8',
      reportOnFailure: true,
      reporter: ['text', 'html', 'lcov'],
      include: ['**/src/**/*.ts*'],
      exclude: [
        'node_modules/',
        'public/',
        'src/main.tsx',
        '**/__mocks__/**/*',
        '**/mocks/**/*',
        '**/testing/*',
        '**/environments/*',
        '**/api/**/*',
        '**/types/**/*',
        '**/types.*',
        '**/index.*',
        '**/*.test.*',
        '**/*.spec.*',
        '**/*.svg.*',
        '**/*module.scss.d.ts',
      ],
    },
  },
});
