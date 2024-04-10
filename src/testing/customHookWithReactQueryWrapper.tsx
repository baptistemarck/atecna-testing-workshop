import type { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const createWrapper = () => {
  return ({ children }: PropsWithChildren) => (
    <BrowserRouter>{children}</BrowserRouter>
  );
};
