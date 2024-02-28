// components/Heading.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heading } from './Heading.tsx';

describe('Heading  Component', () => {
  it('renders with default size', () => {
    render(<Heading />);
    const heading = screen.getByRole('heading', { name: 'UIKIT' });
    expect(heading).toHaveClass('text-5xl');
  });

  it('applies text-5xl class for size 1', () => {
    render(<Heading size={1} />);
    const heading = screen.getByRole('heading', { name: 'UIKIT' });
    expect(heading).toHaveClass('text-5xl');
  });

  it('applies text-4xl class for size 2', () => {
    render(<Heading size={2} />);
    const heading = screen.getByRole('heading', { name: 'UIKIT' });
    expect(heading).toHaveClass('text-4xl');
  });

  it('applies text-3xl class for size 3', () => {
    render(<Heading size={3} />);
    const heading = screen.getByRole('heading', { name: 'UIKIT' });
    expect(heading).toHaveClass('text-3xl');
  });
});
