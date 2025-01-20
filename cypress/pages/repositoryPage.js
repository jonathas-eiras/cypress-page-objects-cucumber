import { faker } from '@faker-js/faker'

class repositoryPage {

    elements = {
        repositoryName : ('[id=":r5:"]'),
        repositoryDescription: ('[id=":ra:"]'),
        addReadme: ('[id=":ri:"]'),
        btnCreateRepository: ('.jLvIcQ > .Box-sc-g0xbh4-0 > .prc-Button-Label-pTQ3x')
    }

    repositoryNameFake = faker.number.int({min:1000, max:9999})

    createRepository (){
        cy.get(this.elements.repositoryName).type(this.repositoryNameFake)
        cy.get(this.elements.repositoryDescription).type(faker.lorem.words())
        cy.get(this.elements.addReadme).check().should('be.checked')
        cy.get(this.elements.addReadme).click()

        cy.get(this.elements.btnCreateRepository).click()
    }

    validateCreatedRepository (){
        cy.url().should('be.equal', `https://github.com/jhon-eiras/${this.repositoryNameFake}`)
    }


}

module.exports = new repositoryPage() 