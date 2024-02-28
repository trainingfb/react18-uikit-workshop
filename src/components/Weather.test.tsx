import { render, screen, waitFor } from '@testing-library/react';
import {expect, describe, test } from 'vitest'

import { Weather, /* BASEURL */ } from './Weather.tsx';

vi.mock('axios', () => {
  return {
    default: {
      get: vi.fn().mockResolvedValue({
        data: { main: { temp: 20 } }
      }),
    },
  }
})

// ANOTHER SOLUTION
// This strategy allow so mock more GETS by checking the url
/*
vi.mock('axios', () => {
  return {
    default: {
      get: vi.fn((url: string) => {
        console.log('--->', url); // in terminal
        if (url.includes(BASEURL)) {
          return Promise.resolve({
            data: { main: { temp: 20 } }
          });
        }
        // You can add more conditions for other URLs or a default response
        return Promise.reject(new Error('not found'));
      })
    }
  }
})
*/

describe('', () => {
  test('render title', async () => {
    render(<Weather city="milan" />);

    await waitFor(() => {
      const heading = screen.getByText(`Weather in Milan`, { selector: 'h1', exact: false });
      expect(heading).toBeInTheDocument()
    })
  });

  test('render temperature', async () => {
    render(<Weather city="milan" />);

    await waitFor(() => {
      const temperature = screen.getByText(`20°`, { selector: 'pre' });
      expect(temperature).toBeInTheDocument()
    })
  });

})
