import { deleteBoard } from "../POM Scrumm/deleteBoardPage"
import { loginPage } from "../POM Scrumm/loginPage"
import { faker } from "@faker-js/faker";
let validEmail = 'jovanjovan@gmail.com'
let validPassword = 'jovan12345'

describe ('login case', () => {
    beforeEach (() => {
        cy.visit ('/login')
        loginPage.emailInput.type(validEmail)
        loginPage.passwordInput.type(validPassword)
        loginPage.clicklLoginBtn()
    })

    it ('positive case / delete board', () => {
        deleteBoard.addNewOrg.should('exist')
        .and('not.be.visible')
        .and('have.class', 'vs-c-my-organization--add-new')
        .and('have.css', 'background-color', 'rgb(230, 230, 230)')
        deleteBoard.clickAddNewOrg()
        deleteBoard.newOrganisationWindowInput.type(faker.lorem.words())
        deleteBoard.nextBtn.click()
        deleteBoard.createBtn.click()
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
        deleteBoard.addNewBoard.click()
        deleteBoard.NewBoardInput.type(faker.lorem.word())
        deleteBoard.nextBtn.click()
        deleteBoard.boardTypeScrumm.click()
        deleteBoard.nextBtn.click()
        deleteBoard.nextBtn.click()
        deleteBoard.nextBtn.click()
        deleteBoard.nextBtn.click()
        deleteBoard.configBtn.click()
        deleteBoard.deleteBtn.click()
        deleteBoard.yesBtn.click()
    })
})