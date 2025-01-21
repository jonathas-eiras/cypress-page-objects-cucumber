import { faker } from '@faker-js/faker'

class repositoryPage {

    elements = {
        repositoryName: () => cy.get('[id=":r5:"]'),
        repositoryDescription: () => cy.get('[id=":ra:"]'),
        addReadme: () => cy.get('[id=":ri:"]'),
        btnCreateRepository: () => cy.get('.jLvIcQ'),
    }

    repositoryNameFake = faker.number.int({ min: 1000, max: 9999 })

    createRepository() {
        this.elements.repositoryName().should('be.visible').type(this.repositoryNameFake)
        this.elements.repositoryDescription().type(faker.lorem.words())
        this.elements.addReadme().check().should('be.checked')
        this.elements.addReadme().click()

        this.elements.btnCreateRepository().click()
    }

    validateCreatedRepository() {
        cy.url().should('be.equal', `https://github.com/jhon-eiras/${this.repositoryNameFake}`)
    }


}

module.exports = new repositoryPage() 