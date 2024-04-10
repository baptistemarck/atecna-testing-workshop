import { screen } from '@testing-library/react';

export const getButton = (name?: string | RegExp) => {
  return name
    ? screen.getByRole('button', { name })
    : screen.getByRole('button');
};

export const getButtons = (name?: string | RegExp) => {
  return name
    ? screen.getAllByRole('button', { name })
    : screen.getAllByRole('button');
};
