/// <reference types="Cypress" />


describe('template spec', () => {
  it('fluxo principal', () => {
    cy.visit('https://projeto38.vercel.app/')
    cy.get('#name').type('admin')
    cy.get('#pass').type('admin@123')
    cy.get('.sc-bBrOHt').click()
    cy.get('.sc-dQpIV').should('be.visible')
  })
})
