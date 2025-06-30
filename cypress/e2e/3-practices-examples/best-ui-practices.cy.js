// BEST PRACTICES: UI Testing with Cypress
// These examples use reusable code, clear assertions, and good structure

// support/commands.js (add custom command example):
// Cypress.Commands.add('login', (email, password) => {
//   cy.get('[data-cy="login-email"]').type(email)
//   cy.get('[data-cy="login-password"]').type(password)
//   cy.get('[data-cy="login-submit"]').click()
// })

import { ActionsPage } from '../pages/ActionsPage'

const actionsPage = new ActionsPage()

describe('Best UI Test Practices', () => {
  beforeEach(() => {
    actionsPage.visit()
  })

  it('should use custom command for login (example)', () => {
    // cy.login('user@example.com', 'password123')
    // cy.url().should('include', '/dashboard')
    // (Uncomment and implement custom command in support/commands.js)
  })

  it('should use fixtures for test data', () => {
    cy.fixture('example').then((data) => {
      actionsPage.goToActions()
      actionsPage.getEmailInput().should('be.visible').type(data.email)
      actionsPage.getEmailInput().should('have.value', data.email)
    })
  })

  it('should validate navigation and content', () => {
    actionsPage.goToActions()
    actionsPage.getUrl().should('include', '/commands/actions')
    actionsPage.getEmailInput().should('be.visible')
  })

  it('should click a visible link as a generic navigation test', () => {
    cy.visit('https://example.cypress.io')
    cy.get('a').first().should('exist').click({force: true})
  })
})
