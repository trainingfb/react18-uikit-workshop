// components/weather.cy.tsx
import { mount } from 'cypress/react18';
import { BASEURL, Weather } from './Weather.tsx';

describe('Card Component', () => {

  beforeEach(() => {
    cy.intercept(
      `${BASEURL}*`,
      { method: 'GET'},
      { main: { temp: 20 } }
    )
    mount(<Weather city="Milan" />);
  });

  it('renders the title correctly', () => {
    cy.get('h1').contains('Milan');
  });

  it('renders the temperature', () => {
    cy.get('pre').contains('20°');
  });

});
