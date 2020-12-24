/// <reference types="Cypress" />
var ext
describe('Verifying column value base on a column key', () => {
    
      it('GET-list user',()=>{
        cy.visit("http://172.29.16.147:8080/")
        cy.get("#userName").type('admin')
        cy.get("#password").type('admin')
        cy.get("button[type='submit']").click()
        cy.get('span:contains(Users)').click()
        cy.get('tr td:nth-child(3)>span').each(($el,index,$list) => {
       const text = $el.text()
        if(text.includes('Super Administrator'))
         {
            //as JQuery(text()) should be resolved with promise need to write then
            cy.get('tr td:nth-child(3)').eq(index).next().then(function(price)
            {
              const adminrole = price.text()
              expect(adminrole).to.equal('kevin@oecc.com')
              
            })
            
         }
        })
      })
      it('Edit user',()=>{
        cy.visit("http://172.29.16.147:8080/")
        cy.get("#userName").type('admin')
        cy.get("#password").type('admin')
        cy.get("button[type='submit']").click()
        cy.get('span:contains(Users)').click()
        cy.get('tr td:nth-child(2)>a').each(($el,index,$list) => {
       const text = $el.text()
        if(text.includes('test1name1'))
         {
            //as JQuery(text()) should be resolved with promise need to write then
            it('GET-list user',()=>{
              cy.visit("http://172.29.16.147:8080/")
              cy.get("#userName").type('admin')
              cy.get("#password").type('admin')
              cy.get("button[type='submit']").click()
              cy.get('span:contains(Users)').click()
              cy.get('tr td:nth-child(2) a').each(($el,index,$list) => {
             const text = $el.text()
             console.log(text+"+++++++++++++++++")
              if(text.includes('test1name1'))
               {
                  //as JQuery(text()) should be resolved with promise need to write then
                  cy.get('tr td:nth-child(2) a').eq(index).next().then(function(price)
                  {
                    cy.get('tr td:nth-child(2) a').click()
                    
                  })
                  
                  
                  
               }
              })
            })
            
         }
        })
      })

    })