import Base from '../../Common/base'
const base = new Base()

describe('Criar Proposta', () => {
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
    cy.get('.c-eVVmAK').click();
    //cy.get('[href="/projects"]').click();
    cy.get('.text').click();
    //cy.get('.text').click();

    ////Proposta
    cy.get('#commitmentAmount').focus().type('200,0');
    cy.get('#individualIncome').focus().type('200000,0');
    cy.get('#requestedAmount').focus().type('30000,00');
    //cy.get('.text').click();
    cy.get('#simulation').click();
    cy.get('#createProposal > .next > .text').click();

    ///// parte 1
    cy.get('#document').focus().type(base.geradorCnpj());
    cy.get('#name').focus().type('naNe name');
    cy.get('.p-inputtext').type('15/06/1984');
    cy.get('#telephone').focus().type('11947213168');
    cy.get('#email').focus().type('fernando.pereira@nava.com.br');
    cy.get('#postalCode').focus().type('03330002');
    cy.get('#send').click();
  })
})