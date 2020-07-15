import React from 'react';
import { render, screen } from '@testing-library/react';
import AppToolbar from './AppToolbar';

test('toolbar title should be Pokedex', () => {
  render(<AppToolbar />)
  expect(screen.getByText('Pokedex')).toBeInTheDocument();
})
