/// <reference types="Cypress" />
describe('MouseHover Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://the-internet.herokuapp.com/hovers")
cy.get(':nth-child(3) > img').invoke('show')
 
})
 
 
})
