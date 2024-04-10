import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

const localStorageMock = (() => {
  let store: Record<string, unknown> = {};

  return {
    getAll: vi.fn(() => {
      return store;
    }),
    getItem: vi.fn((key: string): string | null => {
      return (store[key] as string) || null;
    }),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: vi.fn().mockReturnValue({
    observe,
    unobserve,
    disconnect,
  }),
});
