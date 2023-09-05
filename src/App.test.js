import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders App component with logo', () => {
  render(<App />);
  const logoImage = screen.getByAltText('logo');
  expect(logoImage).toBeInTheDocument();
});