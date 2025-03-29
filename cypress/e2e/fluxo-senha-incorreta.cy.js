/// <reference types="Cypress" />


describe('template spec', () => {
  it('fluxo senha incorreta', () => {
      cy.visit('https://projeto38.vercel.app/');
      cy.get('#name').type('admin');
      cy.get('#pass').type('senhaErrada123');
      cy.get('.sc-bBrOHt').click();
      cy.get(':nth-child(2) > label > .sc-ezrdqu').should('contain.text', 'senha incorreta');
  });
});