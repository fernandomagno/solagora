import Base from '../../Common/base'
const base = new Base()

describe('parte 3', () => {
    it('parte 3', () => {
      cy.visit('//registration/address/a04ec6ef-0924-4d81-bf30-01177cb19689',{failOnStatusCode: false})

   
    //cy.wait(500)
    
    cy.get('#next').click();
    cy.get('.c-iPMWiU > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(2) > .PJLV > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(3) > .PJLV > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(4) > [style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 12px; padding-right: 12px; width: 33.3333%; flex: 0 0 33.3333%; max-width: 33.3333%; margin-left: 0%; right: auto; left: auto;"] > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(5) > [style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 12px; padding-right: 12px; width: 33.3333%; flex: 0 0 33.3333%; max-width: 33.3333%; margin-left: 0%; right: auto; left: auto;"] > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get('[style="box-sizing: border-box; min-height: 1px; position: relative; padding-left: 12px; padding-right: 12px; width: 50%; flex: 0 0 50%; max-width: 50%; margin-left: 0%; right: auto; left: auto;"] > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    
    

    
    })
})