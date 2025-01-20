const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig} = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      on('file:preprocessor', cucumber())
    },
    baseUrl: "https://github.com",
    specPattern: "cypress/e2e/step_definitions/*.feature",
    supportFile: 'cypress/support/e2e.js',
    hideCredentials: true,
    
  },
  video: true
  
})
