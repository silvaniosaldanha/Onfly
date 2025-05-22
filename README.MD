# Projeto de Testes Automatizados E2E para Amazon com Cypress

Este projeto contém testes automatizados de ponta a ponta (E2E) para simular um fluxo de compras no site da Amazon Brasil, utilizando a ferramenta Cypress.

## 🎯 Objetivo

O objetivo principal é validar o fluxo de:
1. Login de usuário.
2. Pesquisa de um produto específico ("Código Limpo").
3. Seleção do produto nos resultados da pesquisa.
4. Verificação dos detalhes do produto.
5. Adição do produto ao carrinho de compras.
6. Logout do usuário.

## 🛠️ Tecnologias Utilizadas

* **Cypress:** Framework de testes E2E para aplicações web.
* **Node.js:** Ambiente de execução JavaScript.
* **npm (ou Yarn):** Gerenciador de pacotes Node.js.
* **Git & GitHub:** Para controle de versão e hospedagem do código.

## 📋 Pré-requisitos

Antes de começar, garanta que você tem instalado:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)

## ⚙️ Configuração do Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/silvaniosaldanha/Onfly.git](https://github.com/silvaniosaldanha/Onfly.git)
    cd Onfly
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(Ou `yarn install` se você estiver usando Yarn)*

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `cypress.env.json` na raiz do projeto. Este arquivo **NÃO** deve ser versionado no Git (ele já deve estar no seu `.gitignore`).
    Adicione suas credenciais da Amazon neste arquivo:
    ```json
    {
      "AMAZON_EMAIL": "seu_email_aqui@exemplo.com",
      "AMAZON_PASSWORD": "sua_senha_aqui"
    }
    ```

## ▶️ Executando os Testes

Existem duas formas principais de executar os testes Cypress:

1.  **Modo Interativo (Com Interface Gráfica):**
    Ideal para desenvolvimento e depuração.
    ```bash
    npx cypress open
    ```
    Na interface do Cypress, clique no arquivo de teste desejado (ex: `amazon_compra_livro.cy.js`) para executá-lo.

2.  **Modo Headless (Sem Interface Gráfica):**
    Ideal para execução em pipelines de CI/CD ou para uma execução mais rápida.
    ```bash
    npx cypress run
    ```
    *(Opcionalmente, você pode especificar um browser: `npx cypress run --browser chrome`)*

## 📂 Estrutura do Projeto (Principais Pastas e Arquivos)

* `cypress/e2e/`: Contém os arquivos de especificação dos testes (ex: `amazon_compra_livro.cy.js`).
* `cypress/fixtures/`: Dados de mock ou dados estáticos para os testes.
* `cypress/support/`: Arquivos de suporte, como comandos customizados (`commands.js`) e configurações globais (`e2e.js`).
* `cypress.config.js`: Arquivo principal de configuração do Cypress.
* `cypress.env.json`: (Não versionado) Variáveis de ambiente específicas do Cypress.
* `package.json`: Define as dependências e scripts do projeto.
* `.gitignore`: Especifica arquivos e pastas que o Git deve ignorar.

## 📄 Evidências dos Testes

* **Vídeos:** Por padrão, o Cypress grava vídeos de cada execução de teste quando rodado via `npx cypress run`. Eles são salvos em `cypress/videos/`.
* **Screenshots:** O Cypress automaticamente tira screenshots em caso de falha durante a execução dos testes. Eles são salvos em `cypress/screenshots/`.
* **Relatórios (Opcional Avançado):** Para relatórios mais detalhados (HTML, etc.), podem ser integradas ferramentas como o "Mochawesome reporter". Veja a seção abaixo para adicionar evidências ao GitHub.

## 👤 Autor

* **[Silvanio Saldanha ]** - *[silvaniosaldanha@gmail.com ]*

---