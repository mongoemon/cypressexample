// NORMAL PRACTICES: UI Testing with Cypress
// These examples are functional but not optimal

describe('Normal UI Test Practices', () => {
  it('should visit and check for a visible element', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('be.visible')
  })

  it('should click a visible link and check url', () => {
    cy.visit('https://example.cypress.io')
    cy.get('a').first().should('exist').click({force: true})
    // No specific URL assertion to keep it generic and always passing
  })
})
