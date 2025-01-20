import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../../pages/homePage"
import RepositoryPage from "../../../pages/repositoryPage"

Given("I have a successful Login", () => {
    HomePage.validateHomePage()
})

When("I want to create new repository", () => {
    HomePage.createNewRepository()

    RepositoryPage.createRepository()

})

Then("I have a new repository", () => {
    RepositoryPage.validateCreatedRepository()
})