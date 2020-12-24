
/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage"
import NotifyPage from "../../support/pageObjects/NotifyPage"

describe('Valid_Logins_TestSuite', function () {
    before(() => {
        cy.fixture('valid_login').then(function (data) {
            this.data = data
        })
    })

    it('Invalid_Login_Credentials_Tests', function () {
        const loginPage = new LoginPage()
        const notifyPage = new NotifyPage()

        cy.visit(Cypress.env('url'))
        this.data.forEach(element => {
            loginPage.getUserNameTextField().focus().clear()
            loginPage.getUserNameTextField().should('be.enabled').type(element.userName)
            loginPage.getPasswordTextField().focus().clear()
            loginPage.getPasswordTextField().should('be.enabled').type(element.password)
            loginPage.getLoginButton().should('be.enabled').should('be.visible').click()
            cy.get('#profileMenu').should('be.visible').click()
            cy.get('#logout').click()

        });

    })
})
