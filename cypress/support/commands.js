// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (username, password, { cacheSession = true } = {}) => {

    
    const login = () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.get('.text-right > .HeaderMenu-link').should('be.visible').click()
        cy.get('#login_field').should('be.visible').type(username)
        cy.get('#password').should('be.visible').type(password, { log: false })
        cy.get('.position-relative > .btn').click()
    }
   

    const validate = () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.location('pathname', { timeout: 1000 }).should('not.eq', `${Cypress.env('baseUrl')}/login`)
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if(cacheSession) {
        cy.session(user, login, options)
    } else {
        login()
    }

   


})