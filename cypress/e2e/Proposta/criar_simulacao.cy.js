import Base from '../../Common/base'
const base = new Base()

describe('Criar Simulacao', () => {
    it('passes', () => {
      cy.visit('https://integrator.develop.solagora.com.br/')
      
      //Login kong
      cy.get('#username').should('be.visible');
      cy.get('#username').focus().type('admin');
      cy.get('#password').should('be.visible');
      cy.get('#password').focus().type('credgrid');
      cy.get('#kc-login').should('be.visible');
      cy.get('#kc-login').click();
  
      //Logado 
      cy.get('.c-bnwJVb > .c-kvBMFa > .pi').should('be.visible');
      cy.get('.c-bnwJVb > .c-kvBMFa > .pi').click();
      //cy.get('[href="/projects"]').click();
      cy.get('.c-eVVmAK').click();
      cy.get('.text').click();
      //cy.get('.text').click();
  
      ////Simulação
      cy.get('#commitmentAmount').focus().type('10,0');
      cy.get('#individualIncome').focus().type('10,0');
      cy.get('#requestedAmount').focus().type('1000,00');
      //cy.get('.text').click();
      //cy.get('#saveSimulation > .next > .text').click();
      cy.get('#simulation').click();

  
      ///// Preencher Campos
      cy.get('#document').focus().type(base.geradorCnpj());
      cy.get('#name').focus().type('Razao Social');
      cy.get('#telephone').focus().type('11947213168');
      cy.get('#send').click();
      cy.get('.c-PJLV-dhzjXW-flex-true > .c-cXkDGK').should('be.visible');
      cy.get('#StatusModal_content > .c-PJLV-dhzjXW-flex-true > .c-jfTpJn').should('be.visible');
      cy.get('.c-PJLV-dhzjXW-flex-true > .c-cXkDGK').should('be.visible');

      
    })
  })