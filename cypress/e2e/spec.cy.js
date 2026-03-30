describe('Tesde de Cadastro', () => {
  it('Acesso página de Cadastro ', () => {

    cy.visit('/login')

    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
        .click()

    cy.url()
      .should('contain','/cadastrarusuarios')
  })

  it('Cadastro Válido', () => {

    cy.visit('/cadastrarusuarios')

    cy.get('[data-testid="nome"]')
      .type('Testando')

    cy.get('[data-testid="email"]')
      .type('teste@teste.com')

    cy.get('[data-testid="password"]')
      .type('123')
    
    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
        .click()

    cy.url({timeout: 60000})
      .should('contain','/home')
  })
  it('Cadastro senha fraca', () => {

    cy.visit('/cadastrarusuarios')

    cy.get('[data-testid="nome"]')
      .type('Testando')

    cy.get('[data-testid="email"]')
      .type('teste@teste.com')

    cy.get('[data-testid="password"]')
      .type('123')

    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
        .click()

    cy.contains('Este email já está sendo usado')
      .should('be.visible')

    cy.get('.form-check')
      .should('not.be.checked')
  })
  it('Cadastro Inválido', () => {
    cy.visit('/cadastrarusuarios')

    cy.get('[data-testid="nome"]')
      .type('Testando')

    cy.get('[data-testid="email"]')
      .type('teste@teste.com')

    cy.get('[data-testid="password"]')
      .type('123')

    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
        .click()

    cy.contains('Caracter especial, númerico e maiúscula')
      .should('be.visible')

    cy.get('.form-check')
      .should('not.be.checked')
  })
})
