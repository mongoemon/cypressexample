# Cypress Practice Project

This project demonstrates end-to-end testing using [Cypress](https://www.cypress.io/).

## Installation

1. **Clone the repository** (if you haven't already):
   ```sh
   git clone <your-repo-url>
   cd Cypresspractice_mon
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Running Cypress

- **Open Cypress Test Runner (GUI):**
  ```sh
  npx cypress open
  ```
  This will launch the Cypress Test Runner where you can select and run tests interactively.

- **Run Cypress tests in the terminal (headless mode):**
  ```sh
  npx cypress run
  ```
  This will execute all tests in headless mode (no browser UI) and output results in the terminal. By default, Cypress runs in headless mode when using `npx cypress run` in CI/CD or scripts.

- **Run Cypress tests in a specific browser (headless):**
  ```sh
  npx cypress run --browser chrome --headless
  ```
  Replace `chrome` with `edge`, `firefox`, or another supported browser as needed.

## Practice Examples

Practice examples are organized in `cypress/e2e/3-practices-examples/` and demonstrate a progression from bad to best practices for both UI and API testing:

### UI Practice Files
- **bad-ui-practices.cy.js**: Minimal assertions, hardcoded waits, generic selectors, and poor structure. Demonstrates what not to do.
- **normal-ui-practices.cy.js**: Basic assertions and interactions, but still uses generic selectors and lacks structure.
- **good-ui-practices.cy.js**: Uses better selectors, validates content, and checks for errors. Improved structure and reliability.
- **best-ui-practices.cy.js**: Uses the Page Object Model (POM), fixtures, custom commands, and robust assertions for maintainable and scalable tests.
- **best-assertions-ui-practices.cy.js**: Demonstrates a wide variety of assertion types and best structure for UI tests.

### API Practice Files
- **bad-practices.cy.js**: No assertions, hardcoded values, and poor async handling. Shows what not to do.
- **normal-practices.cy.js**: Basic status and field checks, but lacks structure and reusability.
- **good-practices.cy.js**: Better structure, more thorough validation, and use of variables.
- **best-api-practices.cy.js**: Uses the Page Object Model (POM) for API requests, fixtures, error handling, and clear structure.
- **best-crud-api-practices.cy.js**: Demonstrates best practices for GET, POST, PUT, and DELETE requests using a POM for the JSONPlaceholder API.

All best-practice files use the Page Object Model for maintainability and clarity. Explore these files to learn the difference between poor and expert-level Cypress test design.

## Example Test Scripts

Cypress test files are located in the `cypress/e2e/` directory. Here are some examples:

### 1. `test1.cy.js`
A custom test file where you can write your own test cases. Example:
```js
// ...existing code...
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
// ...existing code...
```

### 2. `1-getting-started/todo.cy.js`
Shows how to interact with a simple To-Do app:
```js
// ...existing code...
describe('TodoMVC', () => {
  it('can add new todo items', () => {
    cy.visit('/examples/todo')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('.todo-list li').should('have.length', 1)
  })
})
// ...existing code...
```

### 3. `2-advanced-examples/`
Contains advanced examples:
- **actions.cy.js**: Demonstrates user actions (click, type, etc.)
- **aliasing.cy.js**: Shows how to use aliases for elements or data
- **assertions.cy.js**: Various assertion techniques
- **network_requests.cy.js**: How to stub and test network requests
- **files.cy.js**: File upload/download testing

Each file contains multiple `describe` and `it` blocks, which group and define test cases. For more details, open the files in the `cypress/e2e/` directory.

## More Information
- [Cypress Documentation](https://docs.cypress.io/)
- [API Reference](https://docs.cypress.io/api/table-of-contents)
