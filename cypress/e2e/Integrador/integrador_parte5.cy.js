import Base from '../../Common/base'
const base = new Base()

describe('parte 5', () => {
    it('parte 5', () => {
      cy.visit('//registration/basic-data/a04ec6ef-0924-4d81-bf30-01177cb19689',{failOnStatusCode: false})

   
    cy.wait(5000)
    
    //cy.get('#next').click();
    //cy.get('.next > .text').click();
    //cy.get('#next')
    //cy.wait.
    cy.get(':nth-child(3) > .c-PJLV > .c-jfTpJn').click();
    cy.get('#next').click();
    
    
    })
})