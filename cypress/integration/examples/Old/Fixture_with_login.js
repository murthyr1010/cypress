/// <reference types="Cypress" />
describe('My login Fixture Test Suite', function () {
  before(() => {
    cy.fixture('example').then(function (data) {
        this.data = data
    })

  })

  it('My FirstTest case', function () {
    cy.visit('http://172.29.16.147:8080')
    cy.get('#userName').type(this.data.userName)
    cy.get('#password').type(this.data.password)
    cy.get("button[type='submit']").click()



  })


})
