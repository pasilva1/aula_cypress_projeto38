/// <reference types="Cypress" />

describe('Testes de login - todos os fluxos', () => {

  it('Login correto', () => {
    cy.visit('https://projeto38.vercel.app/');
    cy.get('#name').type('admin');
    cy.get('#pass').type('admin@123');
    cy.get('.sc-bBrOHt').click();
    cy.get('.sc-dQpIV').should('contain', 'ALUNOS');
  });

  it('Senha incorreta', () => {
    cy.visit('https://projeto38.vercel.app/');
    cy.get('#name').type('admin');
    cy.get('#pass').type('admin@123444442343223');
    cy.get('.sc-bBrOHt').click();
    cy.get('.sc-gEvEer').should('contain', 'Usuário ou senha inválidos');
  });

  it('Nome não preenchido', () => {
    cy.visit('https://projeto38.vercel.app/');
    cy.get('#pass').type('admin@123');
    cy.get('.sc-bBrOHt').click();
    cy.get('.sc-ezrdqu').should('contain', 'é necessário informar o nome');
  });

  it('Senha não preenchida', () => {
    cy.visit('https://projeto38.vercel.app/');
    cy.get('#name').type('admin');
    cy.get('.sc-bBrOHt').click();
    cy.get('.sc-ezrdqu').should('contain', 'é necessário informar a senha');
  });

});
