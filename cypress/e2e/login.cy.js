import { loginPage } from "../POM Scrumm/loginPage";
import { faker } from "@faker-js/faker";
let validEmail = 'jovanjovan@gmail.com'
let validPassword = 'jovan12345'

describe ('login case', () => {
    beforeEach (() => {
        cy.visit ('/login')
    })

    it ('negative case / invalid email', () => {
        loginPage.emailInput.should ('exist')
        .and ('be.visible')
        .and ('attr', 'placeholder', 'Your Email Address')
        .and ('have.css', 'color', 'rgb(62, 139, 117)')
        .and ('have.class', 'el-input__inner')
        loginPage.emailInput.type('asdmsd@dw');
        loginPage.emailInputError.should ('exist')
        .and ('be.visible')
        .and ('contain', 'The email field must be a valid email')
        .and ('have.css', 'color', 'rgb(187, 57, 22)')
    })

    it ('negative case / invalid password', () => {
        loginPage.passwordInput.should ('exist')
        .and ('be.visible')
        .and ('attr', 'placeholder', 'Your Password')
        .and ('have.css', 'color', 'rgb(62, 139, 117)')
        loginPage.emailInput.type(faker.internet.email())
        loginPage.passwordInput.type(faker.internet.password())
        loginPage.clicklLoginBtn()
        loginPage.emailPasswordError.should ('exist')
        .and ('be.visible')
        .and ('contain', 'Oops! Your email/password combination is incorrect')
        .and ('have.css', 'color', 'rgb(187, 57, 22)')
    })

    it ('negative case / invalid credentials', () => {
        loginPage.emailInput.type ('samkina@vve')
        loginPage.passwordInput.type ('asdasdasd')
        loginPage.clicklLoginBtn()
        loginPage.emailInputError.should ('exist')
        .and ('be.visible')
        .and ('contain', 'The email field must be a valid email')
        .and ('have.css', 'color', 'rgb(187, 57, 22)')
        cy.visit ('/login')
        loginPage.emailInput.type ('samkina@vve.com')
        loginPage.passwordInput.type ('asdasdasd')
        loginPage.clicklLoginBtn()
        loginPage.emailPasswordError.should ('exist')
        .and ('be.visible')
        .and ('contain', 'Oops! Your email/password combination is incorrect')
        .and ('have.css', 'color', 'rgb(187, 57, 22)')
    })

    it ('positive case / valid credentials', () => {
        loginPage.emailInput.type (validEmail)
        loginPage.passwordInput.type (validPassword)
        loginPage.clicklLoginBtn()
    })
})