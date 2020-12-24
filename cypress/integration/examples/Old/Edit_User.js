/// <reference types="Cypress" />
describe('Edit User variant', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://172.29.16.147:8080")
cy.get("#userName").type('admin')
cy.get("#password").type('admin')
cy.get("button[type='submit']").click()
cy.get('span:contains(Users)').click()
cy.get('tr td:nth-child(2)>a').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("test1name1"))
    { 
         cy.get("tr td:nth-child(2)>a").eq(index).click()
    }
 
})
 
 
})
 
 
})
