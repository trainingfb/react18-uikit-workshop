describe('Fabio Biondi Website Test', () => {
  it('Navigates to ABOUT page and checks for H1', () => {
    // Step 1: Open the website
    cy.viewport('iphone-6')
    cy.visit('https://www.fabiobiondi.dev/');

    cy.get('.hamburger-button').click();

    // Step 2: Click on the ABOUT menu
    // Assuming 'ABOUT' is the text of the menu item. Adjust the selector if needed.
    cy.get('.menu_item').contains('About').click();

    // Step 3: Check if the first H1 of the page is "Fabio Biondi"
    // This assumes "Fabio Biondi" is the first H1 content on the ABOUT page.
    cy.get('h1').first().should('contain', 'Fabio Biondi');
  });

  it('Checks if the SUBSCRIBE button is disabled after filling the email field', () => {
    // Visit the page where the form is located
    cy.visit('https://www.fabiobiondi.dev/');

    // Fill the email field with a valid email address
    cy.get('input[name="email"]')
      .type('test@example.com');

    // Check if the SUBSCRIBE button is enabled
    // This might need adjustment based on how your application enables the button
    cy.get('button[type="submit"]')
      .should('be.disabled');
  });


  it('Checks if the SUBSCRIBE button is enabled after filling the email field and check privacy', () => {
    // Visit the page where the form is located
    cy.visit('https://www.fabiobiondi.dev/');

    // Fill the email field with a valid email address
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="privacyConfirm"]').check()

    // Check if the SUBSCRIBE button is enabled
    // This might need adjustment based on how your application enables the button
    cy.get('button[type="submit"]')
      .should('not.be.disabled');
  });
});
