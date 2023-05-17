import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Circle from '../components/Circle';


describe('Circle', () => {
  it('renders without crashing', () => {
    const { container } = render(<Circle minute={0} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('displays correct text based on minute', () => {
    const { rerender, getByText } = render(<Circle minute={0} />);
    expect(getByText('0')).toBeInTheDocument();

    rerender(<Circle minute={20} />);
    expect(getByText('20')).toBeInTheDocument();

    rerender(<Circle minute={45} />);
    expect(getByText('HT')).toBeInTheDocument();

    rerender(<Circle minute={60} />);
    expect(getByText('60')).toBeInTheDocument();

    rerender(<Circle minute={90} />);
    expect(getByText('FT')).toBeInTheDocument();
  });
});