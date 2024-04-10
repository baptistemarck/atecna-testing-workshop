import { describe, expect, test } from 'vitest';
import { getEnvVar } from '.';

describe('utils/get-env-var.ts', () => {
  test('getEnvVar<T>()', () => {
    expect(getEnvVar<string>('FOO')).toEqual(null);
    expect(getEnvVar<string>('BASE_URL')).toEqual(import.meta.env.BASE_URL);
    expect(getEnvVar<boolean>('DEV')).toEqual(import.meta.env.DEV);
  });
});
