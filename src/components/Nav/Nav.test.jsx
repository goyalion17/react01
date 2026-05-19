import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from './Nav.jsx';

const renderWithRouter = (initialEntries = ['/']) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Navbar />
    </MemoryRouter>,
  );

describe('Navbar', () => {
  it('renders all five navigation links', () => {
    renderWithRouter();
    ['Profile', 'Messages', 'News', 'Music', 'Settings'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  it('marks the matching link as active', () => {
    renderWithRouter(['/dialogs']);
    const messages = screen.getByRole('link', { name: 'Messages' });
    expect(messages.className).toMatch(/activeLink/);
  });
});
