
export const clickOnElement = (element) => {

  cy.get(element).should('be.visible').click();

}


export const clickOnElementWithContains = (text) => {

  cy.contains(text).should('be.visible').click();

}

export const clickOnFirstElement = (element) => {

  cy.get(element).should('be.visible').first().click();

}