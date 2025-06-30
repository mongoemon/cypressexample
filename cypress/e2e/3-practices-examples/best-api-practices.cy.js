// BEST PRACTICES: API Testing with Cypress
// These examples use reusable code, clear assertions, and good structure

// support/commands.js (add custom command example):
// Cypress.Commands.add('getPost', (id) => {
//   cy.request(`https://jsonplaceholder.typicode.com/posts/${id}`)
// })

import { JsonPlaceholderApi } from '../pages/JsonPlaceholderApi'

const jsonPlaceholderApi = new JsonPlaceholderApi()

describe('Best API Test Practices', () => {
  beforeEach(() => {
    // Setup or reset if needed
  })

  it('should use custom command for GET', () => {
    jsonPlaceholderApi.getPost(1).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.all.keys('userId', 'id', 'title', 'body')
    })
  })

  it('should validate POST and use fixtures', () => {
    cy.fixture('example').then((data) => {
      jsonPlaceholderApi.createPost(data).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.include(data)
      })
    })
  })

  it('should handle errors gracefully', () => {
    jsonPlaceholderApi.getInvalid().then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
