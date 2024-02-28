// components/Card.test.tsx
import {expect, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Card } from './Card.tsx';

describe('Card Component', () => {

  test('render titele', () => {
    render(<Card title="hello"/>);
    expect(screen.getByText('hello')).toBeInTheDocument()
  });

  test('render children', () => {
    render(<Card title="hello">lorem ipsum</Card>);
    expect(screen.getByText('lorem ipsum')).toBeInTheDocument()
  });

  test('renders the button with label and icon when buttonLabel and buttonUrl are provided', () => {
    render(<Card title="Test Title" buttonLabel="Click Me" buttonUrl="https://example.com"/>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByText('Click Me')).toHaveAttribute('href', 'https://example.com');
    // alternativa
    expect(screen.getByRole('link', { name: 'Click Me' })).toHaveAttribute('href', 'https://example.com');
  });

  it('renders the title in an h5 element', () => {
    render(<Card title="Test Title"/>);
    const heading = screen.getByText('Test Title', { selector: 'h5' });
    // alternativa
    // const heading = screen.getByRole('heading', { name: 'Test Title', level: 5 });
    expect(heading).toBeInTheDocument();
  });

})
