// BAD PRACTICES: UI Testing with Cypress
// These examples demonstrate what NOT to do, but are now technically valid

describe('Bad UI Test Practices', () => {
  it('should visit a page and check the title (minimal assertion)', () => {
    cy.visit('https://example.cypress.io')
    cy.title() // No assertion, just calls the command
  })

  it('should use hardcoded waits and generic selectors', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(5000) // Bad: hardcoded wait
    // Click a visible link instead of button to avoid selector error
    cy.get('a').first().should('exist').click({force: true}) // Still generic selector, but now checks existence and forces click
  })

  it('should check for element existence but not meaningfully', () => {
    cy.visit('https://example.cypress.io')
    cy.get('body').should('exist') // Always true, not meaningful
  })
})
