// Page Object for the Actions page on example.cypress.io

export class ActionsPage {
  visit() {
    cy.visit('https://example.cypress.io')
  }

  goToActions() {
    cy.contains('type').click()
  }

  getEmailInput() {
    return cy.get('.action-email')
  }

  getError() {
    return cy.get('.error')
  }

  getUrl() {
    return cy.url()
  }
}
