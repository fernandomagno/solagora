import Base from '../../Common/base'
const base = new Base()

describe('parte 2', () => {
    it('parte 2', () => {
      cy.visit('//registration/basic-data/a04ec6ef-0924-4d81-bf30-01177cb19689',{failOnStatusCode: false})

   
    //cy.wait(500)
    cy.get('#hasFeeExemption').focus().type('admin');
    cy.get('#tradeName').focus().type('admin');
    cy.get('.css-tj5bde-Svg').click();
    //cy.get('.react-select__input-container').focus().type('admin');
    //cy.get('.p-inputtext').focus().type('admin');
    cy.get('#cpf').focus().type('33487485850');
    cy.get('#representativeName').focus().type('admin');
    cy.get('#email').focus().type('admin@admin.com');
    cy.get('#cellPhone').focus().type('11947213168');
    cy.get('#legalRepresentative').focus().type('admin');


    
    })
})