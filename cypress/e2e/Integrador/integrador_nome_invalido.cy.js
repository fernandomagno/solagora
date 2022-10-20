import Base from '../../Common/base'
const base = new Base()

describe('Nome Invalido', () => {
    it('Nome Invalido', () => {
      cy.visit('/integrator',{failOnStatusCode: false})
   
    cy.wait(500)
    cy.get('#cnpj').focus().type('35510960000186');
    cy.get('#companyName').focus().type('admin');
    //cy.get('#contact').focus().type('sjdfhskjdfhjsdhfkjsdhfjkshdjfkhsdjkfhsjkdhfjksdhfkjsdhfkjsdhfjkshdjkfhsdjkfhsjkdhfkjsdhfjkshdfkjshdkjfhskdjfhskjdhfsjkdhfkjshdfjkshdkfjhsdkjfhskjdhfksjhdfkjshdfjkshdjfhskjdhfskjhfkjshdfkshjdfhsjkdhfsjdhfkjshdfkjs111sjdfhskjdfhjsdhfkjsdhfjkshdjfkhsdjkfhsjkdhfjksdhfkjsdhfkjsdhfjkshdjkfhsdjkfhsjkdhfkjsdhfjkshdfkjshdkjfhskdjfhskjdhfsjkdhfkjshdfjkshdkfjhsdkjfhskjdhfksjhdfkjshdfjkshdjfhskjdhfskjhfkjshdfkshjdfhsjkdhfsjdhfkjshdfkjssjdfhskjdfhjsdhfkjsdhfjkshdjfkhsdjkfhsjkdhfjksdhfkjsdhfkjsdhfjkshdjkfhsdjkfhsjkdhfkjsdhfjkshdfkjshdkjfhskdjfhskjdhfsjkdhfkjshdfjkshdkfjhsdkjfhskjdhfksjhdfkjshdfjkshdjfhskjdhfskjhfkjshdfkshjdfhsjkdhfsjdhfkjshdfkjssjdfhskjdfhjsdhfkjsdhfjkshdjfkhsdjkfhsjkdhfjksdhfkjsdhfkjsdhfjkshdjkfhsdjkfhsjkdhfkjsdhfjkshdfkjshdkjfhskdjfhskjdhfsjkdhfkjshdfjkshdkfjhsdkjfhskjdhfksjhdfkjshdfjkshdjfhskjdhfskjhfkjshdfkshjdfhsjkdhfsjdhfkjshdfkjs');
    cy.get('#email').focus().type('teste@mailinator.com');
    cy.get('#phone').focus().type('11947213168');
    cy.get('form > .c-gNnHhc > :nth-child(1) > .text').click();
    //cy.get('.c-PJLV > .c-gNnHhc-ElARd-color-primaryLight > :nth-child(1) > .text').click();

    cy.get('.c-eQFTdb').should('be.visible');  
  })
})