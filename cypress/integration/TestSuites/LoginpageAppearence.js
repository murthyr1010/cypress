
/*
*Author:rmurthy
*Test Suite Description: This test suite excercise the appearence of Login page, buttons and links
*
*
*/
/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage"
import NotifyPage from "../../support/pageObjects/NotifyPage"

const loginPage = new LoginPage()
const notifyPage = new NotifyPage()

describe('Login_Appearence Test_Suite', function () {

    it('Disbaled_LoginButton_Test', function () {
        cy.visit(Cypress.env('url'))
        loginPage.getLoginButton().should('be.visible').should('be.disabled')
    })

    it('Login_Screen_Image_Test', function () {
        cy.visit(Cypress.env('url'))
        loginPage.getLoginImage().should('be.visible').and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    });
    it('ForgotPassword_Link_Test', function () {
        cy.visit(Cypress.env('url'))
        cy.get('div.oeac-login-forgotPassword-link').click()
        cy.url().should('include', '/forgotPassword')
        cy.go('back').url().should('eq',Cypress.env('url')+'/login')
    });
})
