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
        addBoard.addNewOrg.should('not.be.visible')
        addBoard.addNewOrg.should('have.class', 'vs-c-my-organization--add-new')
        addBoard.addNewOrg.should('have.css', 'background-color', 'rgb(230, 230, 230)')
        addBoard.clickAddNewOrg()
        addBoard.nextBtn.should('exist')
        addBoard.nextBtn.should('be.disabled')
        addBoard.newOrganisationWindowInput.type(faker.lorem.words())
        addBoard.nextBtn.should('be.enabled')
        addBoard.nextBtn.should('be.visible')
        addBoard.nextBtn.click()
        addBoard.createBtn.click()
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
        addBoard.addNewBoard.should ('exist')
        addBoard.addNewBoard.should ('be.visible')
        addBoard.addNewBoard.should ('contain', 'Add new Board')
        addBoard.addNewBoard.click()
        addBoard.NewBoardInput.type(faker.lorem.word())
        addBoard.nextBtn.click()
        addBoard.boardTypeScrumm.should('exist')
        addBoard.boardTypeScrumm.should('be.visible')
        addBoard.boardTypeScrumm.should('have.css', 'color', 'rgb(255, 255, 255)')
        addBoard.boardTypeScrumm.click()
        addBoard.nextBtn.click()
        addBoard.nextBtn.click()
        addBoard.nextBtn.click()
        addBoard.nextBtn.click()
    })
})