// cypress/e2e/amazon_compra_livro.cy.js

describe('Fluxo de compra de livro na Amazon', () => {
  const userEmail = Cypress.env('AMAZON_EMAIL');
  const userPassword = Cypress.env('AMAZON_PASSWORD');

  beforeEach(() => {
    // Preservar cookies entre os testes dentro deste describe block pode ser útil,
    // mas para um fluxo único, o login no início de cada 'it' é mais isolado.
    // Para este caso, como é um fluxo contínuo, faremos o login uma vez no 'it'.
    // Se fossem testes independentes que precisassem de login, usaríamos cy.session()
  });

  it('Deve realizar login, pesquisar, adicionar ao carrinho e fazer logout', () => {
    // CT001: Login na Amazon
    cy.visit('/'); // Vai para a baseUrl (amazon.com.br)

    cy.get('#nav-link-accountList').click(); // Clique em "Olá, Faça seu login"
    cy.get('#ap_email_login').should('be.visible').type(userEmail);
    cy.get('#continue').click();
    cy.get('#ap_password').should('be.visible').type(userPassword);
    cy.get('#signInSubmit').click();

    // Verificação de login (ex: checar se o nome do usuário aparece)
    // O seletor pode variar, inspecione o elemento na Amazon após o login
    cy.get('#nav-link-accountList-nav-line-1').should('contain.text', 'Olá'); // Ajuste 'Olá' se o texto for diferente

    // CT002: Pesquisar Produto
    cy.get('#twotabsearchtextbox').should('be.visible').type('Código Limpo');
    cy.get('#nav-search-submit-button').click();

    // Verificar se a página de resultados carregou
    cy.get('h1').contains('resultados', { matchCase: false, timeout: 20000 }).should('be.visible'); // Ou outro texto que confirme a página de resultados

    // CT003: Selecionar Produto da Lista de Resultados
    // ATENÇÃO: Seletores da Amazon podem ser dinâmicos.
    // É crucial usar seletores robustos ou encontrar formas de identificar o produto corretamente.
    // Este seletor é um exemplo e pode precisar de ajuste.
    // Tente selecionar pelo texto do link que contenha "Código Limpo" e seja um resultado de produto.
    cy.get('div[data-component-type="s-search-result"]') // Pega todos os cards de resultado
  .filter(':contains("Código Limpo")') // Filtra os cards que contêm o texto "Código Limpo" em qualquer lugar dentro deles
  .first() // Pega o primeiro card que contém o texto
  .find('h2 span') // Dentro desse card, encontra o span dentro de um h2 (baseado no seu HTML)
  .should('contain.text', 'Código Limpo') // Confirma o texto (opcional, mas bom)
  .closest('a, div[data-component-type="s-search-result"]') // Sobe na árvore DOM para encontrar o primeiro ancestral 'a' OU o próprio card
  .click(); // Clica no link ou no card


    // CT004: Verificar Detalhes do Produto
    cy.get('#productTitle').should('be.visible').and('contain.text', 'Código Limpo');
    // Opcional: verificar autor, se o seletor for estável
    cy.contains('.author a', 'Robert C. Martin').should('be.visible');

    // CT005: Adicionar Produto ao Carrinho
    cy.get('#add-to-cart-button').should('be.visible').click();

    // Verificar confirmação
    // Pode ser um modal, uma mensagem na página ou o contador do carrinho
    // Exemplo para um modal comum (pode variar):
    cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS', { timeout: 20000 }) // Espera até 15s por esta mensagem
      .should('be.visible')
      .and('contain.text', 'Adicionado ao carrinho');
    // Fechar o modal se ele aparecer e cobrir outros elementos (opcional, dependendo da UI)
    // cy.get('#attach-close_sideSheet-link').click({force: true}); // Exemplo de como fechar um painel lateral

    // Ou verificar o contador do carrinho (o seletor '#nav-cart-count' é comum)
    // cy.get('#nav-cart-count').should('contain.text', '1');

    // CT006: Logout da Amazon
    // A Amazon pode ter mecanismos de proteção contra automação no logout.
    // O trigger('mouseover') pode ser necessário.
    cy.get('#nav-link-accountList').trigger('mouseover');
    cy.get('#nav-item-signout').click({ force: true }); // force:true pode ser necessário se o elemento estiver coberto

    // Verificar se o logout foi bem-sucedido
    cy.get('#signInSubmit').click();
cy.get('#twotabsearchtextbox', { timeout: 20000 }).should('be.visible'); // Espera a barra de pesquisa estar visível
// Só então procure pelo elemento de verificação de login
cy.get('#nav-link-accountList-nav-line-1') /* ... */
  });
});