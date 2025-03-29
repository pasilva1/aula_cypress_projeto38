/// <reference types="Cypress" />

describe('template spec', () => {
  it('fluxo nome não preenchido', () => {
    cy.visit('https://projeto38.vercel.app/');
    cy.get('#pass').type('admin@123');
    cy.get('.sc-bBrOHt').click();
    cy.get('.sc-ezrdqu').should('contain', 'é necessário informar o nome');
  });
});
