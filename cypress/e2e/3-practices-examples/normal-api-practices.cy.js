// NORMAL PRACTICES: API Testing with Cypress
// These examples are functional but not optimal

describe('Normal API Test Practices', () => {
  it('should check status and some fields', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('should test a POST request', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', 'foo')
    })
  })
})
