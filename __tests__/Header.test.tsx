import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByText('Soccer Lovers')).toBeInTheDocument();
  });

  it('displays the search input', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });
});
