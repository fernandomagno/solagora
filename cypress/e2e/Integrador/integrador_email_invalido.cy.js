import Base from '../../Common/base'
const base = new Base()

describe('Email Invalido', () => {
    it('Email Invalido', () => {
      cy.visit('/integrator',{failOnStatusCode: false})
   
    cy.wait(500)
    cy.get('#cnpj').focus().type('35510960000186');
    cy.get('#companyName').focus().type('admin');
    cy.get('#contact').focus().type('admin');
    cy.get('#email').focus().type('testemailinator.com');
    cy.get('#phone').focus().type('11947213168');
    cy.get('form > .c-gNnHhc > :nth-child(1) > .text').click();
    cy.get('.c-eQFTdb').should('be.visible');  
  })
})