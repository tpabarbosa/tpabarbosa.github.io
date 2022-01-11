import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders image', () => {
  const imageElement = screen.getByRole('img');
  expect(imageElement).toHaveAttribute('src', 'logo.svg');
  expect(imageElement).toHaveAttribute('alt', 'logo');
})
