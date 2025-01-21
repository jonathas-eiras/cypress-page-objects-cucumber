
class homePage {

    elements = {
        btnNewRepository: () => cy.get('[data-target="loading-context.details"] > .Details > .js-repos-container > .hide-sm > .Button--primary'),

    }
    validateHomePage() {
        cy.visit(Cypress.config("baseUrl"))
        cy.location('pathname', { timeout: 1000 }).should('not.eq', `${Cypress.env('baseUrl')}/login`)
    }

    createNewRepository() {



        this.elements.btnNewRepository().should('be.visible').click()


        cy.url()
            .should(
                'be.equal', `https://github.com/new`
            )

    }
}

module.exports = new homePage();