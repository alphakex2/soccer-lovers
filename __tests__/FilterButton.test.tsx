import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterButton from '../components/FilterButton';
import '@testing-library/jest-dom/extend-expect';


describe('FilterButton', () => {
  it('renders the label and count', () => {
    const mockSetFilter = jest.fn();
    const { getByText } = render(
      <FilterButton 
        filter={"all"}
        count={5} 
        setFilter={mockSetFilter} 
        label="Test" 
        isActive={false} 
      />
    );
    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });

  it('calls setFilter with the right argument when clicked', () => {
    const mockSetFilter = jest.fn();
    const { getByText } = render(
      <FilterButton 
        filter={"all"}
        count={5} 
        setFilter={mockSetFilter} 
        label="Test" 
        isActive={false} 
      />
    );
    fireEvent.click(getByText('Test'));
    expect(mockSetFilter).toHaveBeenCalledWith("all");
  });
});