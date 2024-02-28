// components/Button.test.tsx
import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button.tsx';

describe('Button Component', () => {
  test('renders with primary variant by default', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass('bg-sky-400');
  });

  test('renders with danger variant by default', () => {
    render(<Button variant="danger">Click Me</Button>);
    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass('bg-red-400');
  });

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button', { name: 'Disabled Button' })).toHaveClass('disabled:opacity-35');
    expect(screen.getByRole('button', { name: 'Disabled Button' })).toHaveClass('disabled:pointer-events-none');
  });

  // MORE...

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('changes style on mouseover', () => {
    const handleOver = vi.fn();
    render(<Button onMouseOver={handleOver}>Hover Over Me</Button>);
    const button = screen.getByRole('button', { name: 'Hover Over Me' });
    fireEvent.mouseOver(button);
    expect(handleOver).toHaveBeenCalledTimes(1);

  });

  // Example test for checking the type attribute
  test('has the correct type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toHaveAttribute('type', 'submit');
  });

});
