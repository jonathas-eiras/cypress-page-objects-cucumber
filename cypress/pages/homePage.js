
class homePage {

    validateHomePage() {
        cy.visit(Cypress.config("baseUrl"))
        cy.location('pathname', { timeout: 1000 }).should('not.eq', `${Cypress.env('baseUrl')}/login`)
    }

    createNewRepository() {


        cy.get('[data-target="loading-context.details"] > .Details > .js-repos-container > .hide-sm > .Button--primary', {timeout:7000}).should('be.visible').click()
    

        cy.url()
            .should(
                'be.equal', `https://github.com/new`
            )

    }
}

module.exports = new homePage();