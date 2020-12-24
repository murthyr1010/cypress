
/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage"
describe('Login Parameterization Test Suite', function () {
  before(() => {
    cy.fixture('users').then(function (data) {
        this.data = data
    })

  })

  it('Login_Multiple_Users', function () {
    const loginPage = new LoginPage()
    cy.visit(Cypress.env('url'))

    this.data.forEach(element =>{
      loginPage.getUserNameTextField().type(element.userName)
      loginPage.getPasswordTextField().type(element.password)
      loginPage.getLoginButton().click()
      cy.get('div.oeac-header-user-profile div span').click()
      cy.contains('Sign out').click()
    });

  })


})
