const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: [
      "cypress/e2e/!(1-getting-started|2-advanced-examples)/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/e2e/!(1-getting-started|2-advanced-examples).cy.{js,jsx,ts,tsx}"
    ],
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: true,
    html: true,
    json: false
  }
});
