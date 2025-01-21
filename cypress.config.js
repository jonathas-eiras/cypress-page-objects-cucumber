const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://github.com",
    specPattern: "cypress/e2e/step_definitions/*.feature",
    supportFile: 'cypress/support/e2e.js',
    hideCredentials: true,


  },
  video: true,

  retries: {
    runMode: 2,
    openMode: 0,
  }

})
