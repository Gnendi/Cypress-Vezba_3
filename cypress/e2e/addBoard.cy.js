import { loginPage } from "../POM Scrumm/loginPage";
import { faker } from "@faker-js/faker";
import { addBoard } from "../POM Scrumm/addBoardPage";
let validEmail = 'jovanjovan@gmail.com'
let validPassword = 'jovan12345'

describe ('login case', () => {
    beforeEach (() => {
        cy.visit ('/login')
        loginPage.emailInput.type(validEmail)
        loginPage.passwordInput.type(validPassword)
        loginPage.clicklLoginBtn()
    })

    it ('positive case / add board', () => {
        addBoard.addNewOrg.should('exist')
        .and('have.class', 'vs-c-my-organization--add-new')
        .and('not.be.visible')
        .and('have.css', 'background-color', 'rgb(230, 230, 230)')
        addBoard.clickAddNewOrg()
        addBoard.nextBtn.should('exist')
        .and('be.disabled')
        addBoard.newOrganisationWindowInput.type(faker.lorem.words())
        addBoard.nextBtn.should('be.enabled')
        .and('be.visible')
        addBoard.nextBtn.click()
        addBoard.createBtn.click()
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
        addBoard.addNewBoard.should ('exist')
        .and ('be.visible')
        .and ('contain', 'Add new Board')
        addBoard.addNewBoard.click()
        addBoard.NewBoardInput.type(faker.lorem.word())
        addBoard.nextBtn.click()
        addBoard.boardTypeScrumm.should('exist')
        .and('be.visible')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        addBoard.boardTypeScrumm.click()
        addBoard.nextBtn.click()
        addBoard.nextBtn.click()
        addBoard.nextBtn.click()
        addBoard.nextBtn.click()
    })
})