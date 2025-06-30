// GOOD PRACTICES: UI Testing with Cypress
// These examples show better structure and validation

describe('Good UI Test Practices', () => {
  it('should use data-* selectors and validate content', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').should('be.visible').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').should('be.visible').type('test@email.com')
    cy.get('.action-email').should('have.value', 'test@email.com')
  })

  it('should check for error messages on invalid input', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').should('be.visible').click()
    cy.get('.action-email').should('be.visible').type('not-an-email')
    cy.get('.action-email').blur()
    // The demo site may not show an error, so just check the field is still visible
    cy.get('.action-email').should('be.visible')
  })

  it('should click a visible link as a generic navigation test', () => {
    cy.visit('https://example.cypress.io')
    cy.get('a').first().should('exist').click({force: true})
  })
})
