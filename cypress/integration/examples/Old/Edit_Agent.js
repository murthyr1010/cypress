/// <reference types="Cypress" />
describe('Edit Agents Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://172.29.16.147:8080")
cy.get("#userName").type('admin')
cy.get("#password").type('admin')
cy.get("button[type='submit']").click()
cy.get('span:contains(Command Center Agents)').click()
cy.get('tr td:nth-child(3)>a').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("nbhydskommine10"))
    { 
         cy.get("tr td:nth-child(3)>a").eq(index).click()
    }
 
})
 
 
})
 
 
})
