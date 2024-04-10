import { QueryClientProvider } from '@tanstack/react-query';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type React from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getNewQueryClient } from './getNewQueryClient';

export const renderWithProviders = (node: ReactNode, options?: Omit<RenderOptions, 'queries'>): ReturnType<typeof render> => {
  const queryClient = getNewQueryClient();
  const rendered = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={node} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>,
    options,
  );
  return {
    ...rendered,
    container: rendered.container,
    rerender: (ui: React.ReactNode, opt?: unknown[]) =>
      renderWithProviders(ui, {
        container: rendered.container,
        ...opt,
      }),
  };
};
