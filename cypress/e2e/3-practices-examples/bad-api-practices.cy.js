// BAD PRACTICES: API Testing with Cypress
// These examples demonstrate what NOT to do

describe('Bad API Test Practices', () => {
  it('should not check response status', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
    // No assertions at all
  })

  it('should use hardcoded values and no error handling', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.body.id).to.eq(1)
      // No check for status, no dynamic data
    })
  })

  it('should not handle async properly', () => {
    let result
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      result = response.body
    })
    // Trying to use result here will fail
    // expect(result).to.exist
  })
})
