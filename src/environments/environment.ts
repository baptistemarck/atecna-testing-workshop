// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { getEnvVar } from '@appli/utils';

export const environment = {
  env: getEnvVar<string>('VITE_NODE_ENV') ?? '',
  apiUrl: getEnvVar<string>('VITE_API_URL') ?? '',
};
