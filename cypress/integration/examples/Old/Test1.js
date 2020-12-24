/// <reference types="Cypress" />
var ext
describe('My First Test', () => {
    /*it('Login-expand-contrast', () => {
      cy.visit("http://172.29.16.147:8080/")
      cy.get("#userName").type('admin')
      cy.get("#password").type('admin')
      cy.get("button[type='submit']").click()
      //Toggle to hide
      cy.get(".k-drawer-item.oeac-sidebar-toggleIcon").find(".oeac-sidebar-toggleIcon-end.fas.fa-arrow-left").click()
     //Toggle to hide
      cy.get(".k-drawer-item.oeac-sidebar-toggleIcon").find(".oeac-sidebar-toggleIcon-start.fas.fa-arrow-right").click()
      
     // cy.get('span:contains(Email Settings)').click()
     // cy.get('#hostName').type("abc")
 
    })*/

    /* it('EmailSettings', () => {
        cy.visit("http://172.29.16.147:8080/")
        cy.get("#userName").type('admin')
        cy.get("#password").type('admin')
        cy.get("button[type='submit']").click()
        cy.get('span:contains(Email Settings)').click()
        //verify that it is landed to Email Settings page
        cy.get('.oeac-maincontent-title > span').should('have.text','Email Settings')
        cy.get('#hostName').type("172.16.108.158")
        //verify default port is 25
        cy.get('#port').should('have.value','25')
        cy.get('#port').clear()
        cy.get('#port').type('1025').should('have.value','1025')
        //verify by default secure is checked
        cy.get('#secure').should('be.checked')
        cy.get('#secure').uncheck().should('not.be.checked')
        //verify that "Use STARTTLS when available" radio is selected by defult"
        cy.get("input[value='IGNORE_STARTTLS']").should('not.be.checked') 
        cy.get("input[value='USE_STARTTLS']").should('be.checked') 
        cy.get("input[value='REQUIRE_STARTTLS']").should('not.be.checked') 
        //Select ignore STARTTLS
        cy.get("input[value='IGNORE_STARTTLS']").check().should('be.checked') 

        //check Enable SMTP Authentication is not checked by default
        cy.get('#authentication').should('not.be.checked')
        //Check MailServer userName and password
        cy.get('input#userName').should('be.disabled')
        cy.get('input#password').should('be.disabled')
        cy.get('input#defaultEmailSender').should('have.value','').type('support@oecc.com')
        cy.contains('Send Test Email').click()
        cy.get('.k-notification-content > span').should('have.text','Mail sent to kevin@oecc.com')
        cy.wait(8000)
        cy.get('.oeac-edit-page-content-form-buttons>button').click()
        cy.get('.k-notification-content > span').should('have.text','Successfully updated')
      })*/
      it('GET-list user',()=>{
        cy.request('GET','http://172.16.108.158:8025/api/v2/search?kind=from&query=support@oecc.com').then((response)=>{
            var test1 = response.body.items[0].Raw.Data
            //console.log("---------******"+test1)
            ext = test1.replaceAll('\\r|\\n|=\\r\\n||\\n\\r=|\\n=\\r|\\r\\n=|\\r=\\n', '')
           
           ext = ext.substring(ext.indexOf("resetId="),ext.indexOf("resetId=")+46)
           ext = ext.replace('3D',"")
        console.log("---------------"+ext)
    })

  })
})
