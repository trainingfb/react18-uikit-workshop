// components/Button.test.tsx
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button.tsx';

describe('Button Component', () => {
  it('renders with primary variant by default', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass('bg-sky-400');
  });

  it('renders with danger variant by default', () => {
    render(<Button variant="danger">Click Me</Button>);
    expect(screen.getByRole('button', { name: 'Click Me' })).toHaveClass('bg-red-400');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByRole('button', { name: 'Disabled Button' })).toHaveClass('disabled:opacity-35');
    expect(screen.getByRole('button', { name: 'Disabled Button' })).toHaveClass('disabled:pointer-events-none');
  });

  // MORE...

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('changes style on mouseover', () => {
    const handleOver = vi.fn();
    render(<Button onMouseOver={handleOver}>Hover Over Me</Button>);
    const button = screen.getByRole('button', { name: 'Hover Over Me' });
    fireEvent.mouseOver(button);
    expect(handleOver).toHaveBeenCalledTimes(1);

  });

  // Example test for checking the type attribute
  it('has the correct type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toHaveAttribute('type', 'submit');
  });

});
