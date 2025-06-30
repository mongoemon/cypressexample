// GOOD PRACTICES: API Testing with Cypress
// These examples show better structure and validation

describe('Good API Test Practices', () => {
  it('should validate all important response fields', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include.keys('userId', 'id', 'title', 'body')
      expect(response.body.id).to.eq(1)
    })
  })

  it('should use variables and custom commands', () => {
    const postId = 1
    cy.request(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(postId)
    })
  })
})
