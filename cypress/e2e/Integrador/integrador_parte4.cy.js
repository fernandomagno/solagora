import Base from '../../Common/base'
const base = new Base()

describe('parte 4', () => {
    it('parte 4', () => {
      cy.visit('//registration/basic-data/a04ec6ef-0924-4d81-bf30-01177cb19689',{failOnStatusCode: false})

   
    //cy.wait(500)
    
    cy.get('#next').click();
    cy.get(':nth-child(1) > :nth-child(2) > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get('.c-dhDxhH-icFpcyF-css > .c-fxrEBZ > :nth-child(1) > .c-PJLV-ieAkaAR-css > :nth-child(2) > .PJLV > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get('.c-dhDxhH-icFpcyF-css > .c-fxrEBZ > :nth-child(1) > .c-PJLV-ieAkaAR-css > :nth-child(4) > :nth-child(1) > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(4) > :nth-child(2) > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(3) > .c-fxrEBZ > :nth-child(1) > .c-PJLV-ieAkaAR-css > :nth-child(1) > .PJLV > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(3) > .PJLV > .c-hrOzNq > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(3) > .c-fxrEBZ > :nth-child(1) > .c-PJLV-ieAkaAR-css > :nth-child(4) > .PJLV > .c-hrOzNq > .c-eQFTdb').should('be.visible');

    
    })
})