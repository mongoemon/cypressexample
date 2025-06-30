// BEST PRACTICES: CRUD API Testing with Cypress
// Demonstrates GET, POST, PUT, DELETE using a real test API (jsonplaceholder)

import { JsonPlaceholderApi } from '../pages/JsonPlaceholderApi'

const jsonPlaceholderApi = new JsonPlaceholderApi()

describe('Best CRUD API Test Practices', () => {
  let createdPostId

  it('should GET a post', () => {
    jsonPlaceholderApi.getPost(1).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.all.keys('userId', 'id', 'title', 'body')
      expect(response.body.id).to.eq(1)
    })
  })

  it('should POST (create) a new post', () => {
    const newPost = { title: 'foo', body: 'bar', userId: 1 }
    jsonPlaceholderApi.createPost(newPost).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(newPost)
      createdPostId = response.body.id
    })
  })

  it('should PUT (update) a post', () => {
    const updatedPost = { id: 1, title: 'updated', body: 'updated body', userId: 1 }
    jsonPlaceholderApi.updatePost(1, updatedPost).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include(updatedPost)
    })
  })

  it('should DELETE a post', () => {
    jsonPlaceholderApi.deletePost(1).then((response) => {
      expect(response.status).to.be.oneOf([200, 204])
    })
  })
})
