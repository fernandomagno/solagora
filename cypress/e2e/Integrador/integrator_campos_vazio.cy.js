import Base from '../../Common/base'
const base = new Base()

describe('Campos Vazio', () => {
    it('Campos Vazio', () => {
      cy.visit('/integrator',{failOnStatusCode: false})
   
    cy.wait(500)
    cy.get('form > .c-gNnHhc > :nth-child(1) > .text').click();
    cy.get(':nth-child(1) > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(2) > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(3) > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(4) > .c-eQFTdb').should('be.visible');
    cy.get(':nth-child(5) > .c-eQFTdb').should('be.visible');
    
    })
})