
/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage"
import NotifyPage from "../../support/pageObjects/NotifyPage"

describe('Invalid_Login_TestSuite', function () {
    before(() => {
        cy.fixture('invalid_login').then(function (data) {
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
            notifyPage.getNotificationMessageSpan().should('have.text', 'Invalid Credentials')
            notifyPage.getNotificationsCloseAnchor().click()
            notifyPage.getNotificationMessageSpan().should('not.exist')
        });

    })

    it('Blank_Login_Credentials_Tests', function () {
        const loginPage = new LoginPage()
        const notifyPage = new NotifyPage()
        cy.visit(Cypress.env('url'))
        loginPage.getLoginButton().should('be.visible').should('be.disabled')
    })

    it('Login_Screen_Image_Test', function () {
        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url'))
        loginPage.getLoginImage().should('be.visible').and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    });


})
