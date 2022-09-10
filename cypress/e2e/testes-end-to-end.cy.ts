describe('Testa renderização dos componentes primários', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Testa se o titulo da pagina foi renderizado', () => {
    cy.get('#page-title').type('School Research');
  });

  it('Testa se o link para os artigos foi renderizado', () => {
    cy.get('#page-link-articles').type('Artigos');
  });

  it('Testa se o link para os favoritos foi renderizado', () => {
    cy.get('#page-link-favorites').type('Favorites');
  });

  it('Testa se a barra de pesquisa foi renderizada', () => {
    cy.get('#search-input').should('exist');
  });

  it('Testa se o botão de pesquisa foi renderizado', () => {
    cy.get('#search-button').should('exist');
  });

  it('Testa se as informações do footer foram renderizadas', () => {
    cy.get('#page-footer-info').should(
      'contain.text',
      'School Research © 2022'
    );
  });
});

describe('Testa links da Header ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Testa se a pagina "favorites" é renderizada ao clicar em "Favoritos"', () => {
    cy.get('#page-link-favorites').click();
    cy.url().should('includes', 'favorites');
  });

  it('Testa se a pagina "search" é renderizada ao clicar em "Artigos"', () => {
    cy.get('#page-link-articles').click();
    cy.url().should('includes', 'search');
  });
});

describe('Testa comportamento da página de pesquisa ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search');
  });

  it('Testa se a lista de artigos se inicia vazia', () => {
    cy.contains('#article').should('not.exist');
  });

  it('Testa se os resultados são renderizados ao executar uma pesquisa', () => {
    cy.get('#search-input').type('Tripanossomíase americana');
    cy.get('#search-button').click();
    cy.get('#article').should('exist');
  });
});

describe('Testa comportamento dos botões do artigo ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/search');
  });

  it('Testa botão para adicionar artigos aos favoritos', () => {
    cy.get('#search-input').type('Tripanossomíase americana');
    cy.get('#search-button').click();

    // clicando no botão para favoritar um artigo
    cy.get('#favorite-toggle-button').click();
    // verificando se o artigo foi adicionado a pagina de favoritos
    cy.visit('http://localhost:3000/favorites');
    cy.get('#article').should('exist');
  });

  it('Testa botão para remover artigo dos favoritos', () => {
    cy.get('#search-input').type('Tripanossomíase americana');
    cy.get('#search-button').click();

    // clicando no botão para remover um artigo
    cy.get('#favorite-toggle-button').click();
    // verificando se o artigo foi removido a pagina de favoritos
    cy.visit('http://localhost:3000/favorites');
    cy.get('#article').should('not.exist');
  });
});
