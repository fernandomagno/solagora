import Base from '../../Common/base'
const base = new Base()

describe('Cadastro Integrador com Sucesso', () => {
    it('Cadastro Integrador com Sucesso', () => {
      cy.visit('/integrator',{failOnStatusCode: false})

   
    cy.wait(500)
    cy.get('#cnpj').focus().type(base.geradorCnpj());
    cy.get('#companyName').focus().type('admin');
    cy.get('#contact').focus().type('admin');
    cy.get('#email').focus().type('fernando.pereira@nava.com.br');
    cy.get('#phone').focus().type('11947213168');
    cy.get('form > .c-gNnHhc > :nth-child(1) > .text').click();
    cy.get('.c-PJLV > .c-gNnHhc-ElARd-color-primaryLight > :nth-child(1) > .text').click();
    cy.get('#StatusModal_content > .c-PJLV-dhzjXW-flex-true > .c-jfTpJn').should('be.visible');
    })
})