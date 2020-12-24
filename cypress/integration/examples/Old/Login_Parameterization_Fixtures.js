/// <reference types="Cypress" />
describe('Param Test Suite', function () {
  before(() => {
    cy.fixture('users').then(function (data) {
      this.data = data
    })

  })

  it('Login_Multiple_Users', function () {
    cy.visit(Cypress.env('url'))

    this.data.forEach(element => {
      cy.get('#userName').type(element.userName)
      cy.get('#password').type(element.password)
      cy.get("button[type='submit']").click()
      cy.get('div.oeac-header-user-profile div span').click()
      cy.contains('Sign out').click()
    });

  })

  it('Login_Multiple_Users', function () {
    cy.visit(Cypress.env('url'))

    cy.get('img[src="/static/media/Login.5891a47a.png"]').should('be.visible').and(($img) => {
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  });

})

  



