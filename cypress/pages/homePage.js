
class homePage {

    elements = {
        btnNewRepository: () => cy.get('[data-target="loading-context.details"] > .Details > .js-repos-container > .hide-sm > .Button--primary'),
        btnNew: () => cy.get('body > div.logged-in.env-production.page-responsive.full-width > div.application-main > div > div > aside > div > div > loading-context > div > div.Details.js-repos-container.mt-5 > div > div.hide-sm.hide-md.mb-1.d-flex.flex-justify-between.flex-items-center > a > span')
    }
    validateHomePage() {
        cy.visit(Cypress.config("baseUrl"))
        cy.location('pathname', { timeout: 1000 }).should('not.eq', `${Cypress.env('baseUrl')}/login`)
    }

    createNewRepository() {


        this.elements.btnNew().should('be.visible').click()


        cy.url()
            .should(
                'be.equal', `https://github.com/new`
            )

    }
}

module.exports = new homePage();