/// <reference types="Cypress" />
describe('Edit User Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://172.29.16.147:8080")
cy.get("#userName").type('admin')
cy.get("#password").type('admin')
cy.get("button[type='submit']").click()
cy.get('span:contains(Users)').click()
cy.editUser('test2name2')
 
 
})
 
 
})
