import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('displays the current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(screen.getByText(currentYear, { exact: false })).toBeInTheDocument();
  });
});
