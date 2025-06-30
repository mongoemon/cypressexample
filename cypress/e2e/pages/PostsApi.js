// Page Object for JSONPlaceholder API

export class JsonPlaceholderApi {
  getPost(id) {
    return cy.request(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  createPost(data) {
    return cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', data)
  }

  updatePost(id, data) {
    return cy.request('PUT', `https://jsonplaceholder.typicode.com/posts/${id}`, data)
  }

  deletePost(id) {
    return cy.request('DELETE', `https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getInvalid() {
    return cy.request({
      url: 'https://jsonplaceholder.typicode.com/invalid-url',
      failOnStatusCode: false
    })
  }
}
