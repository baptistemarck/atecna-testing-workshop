import { describe, expect } from 'vitest';
import { getEnvVar } from '.';

describe('utils/get-env-var.ts', () => {
  it('getEnvVar<T>()', () => {
    expect(getEnvVar<string>('FOO')).toEqual(null);
    expect(getEnvVar<string>('BASE_URL')).toEqual(import.meta.env.BASE_URL);
    expect(getEnvVar<boolean>('DEV')).toEqual(import.meta.env.DEV);
  });
});
