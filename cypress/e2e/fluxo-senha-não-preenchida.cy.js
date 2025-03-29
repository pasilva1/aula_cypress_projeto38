/// <reference types="Cypress" />


describe('template spec', () => {
  it('fluxo senha não preenchida', () => {
    cy.visit('https://projeto38.vercel.app/');
    cy.get('#name').type('admin');
    cy.get('.sc-bBrOHt').click();
    cy.get('.sc-ezrdqu').should('contain', 'é necessário informar a senha');
  });
});