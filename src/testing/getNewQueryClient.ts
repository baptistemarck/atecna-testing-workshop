import { QueryClient } from '@tanstack/query-core';

export const getNewQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 0,
        retry: false,
      },
    },
  });
};
