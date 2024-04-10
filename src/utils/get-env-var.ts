export const getEnvVar = <T>(key: string): T | null => {
  const value: T = import.meta.env[key] as T;
  if (!value) {
    return null;
  }
  return value;
};
