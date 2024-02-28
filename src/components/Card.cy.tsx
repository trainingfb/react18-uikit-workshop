// components/card.cy.tsx
import { mount } from 'cypress/react18';
import { Card } from './Card';


describe('Card Component', () => {
  const title = 'Test Title';
  const buttonLabel = 'Learn More';
  const buttonUrl = 'https://example.com';

  beforeEach(() => {
    // Common setup for each test
    mount(
      <Card title={title} buttonLabel={buttonLabel} buttonUrl={buttonUrl}>
        <p>Card content goes here</p>
      </Card>
    );
  });

  it('renders the title correctly', () => {
    // Check if title is rendered
    cy.get('h5').contains(title);
  });

  it('renders the children content correctly', () => {
    // Check if children content is rendered
    cy.get('div').contains('Card content goes here');
  });

  it('renders the button with correct label and URL', () => {
    // Check if button is rendered with correct label and URL
    cy.contains(buttonLabel)
      .should('have.attr', 'href', buttonUrl)
      .and('contain', buttonLabel)
  });
});
