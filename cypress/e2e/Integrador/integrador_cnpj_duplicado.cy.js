import Base from '../../Common/base'
const base = new Base()

describe('CNPJ duplicado', () => {
    it('CNPJ duplicado', () => {
      cy.visit('/integrator',{failOnStatusCode: false})
   
    cy.wait(500)
    cy.get('#cnpj').focus().type('35510960000186');
    cy.get('#companyName').focus().type('admin');
    cy.get('#contact').focus().type('admin');
    cy.get('#email').focus().type('teste@mailinator.com');
    cy.get('#phone').focus().type('11947213168');
    cy.get('form > .c-gNnHhc > :nth-child(1) > .text').click();
    cy.get('.c-PJLV > .c-gNnHhc-ElARd-color-primaryLight > :nth-child(1) > .text').click();
    cy.get('#StatusModal_content > .c-PJLV-dhzjXW-flex-true > .c-jfTpJn').should('be.visible');
    cy.get('.c-cXkDGK').should('be.visible');  
  })
})