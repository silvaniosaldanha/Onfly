// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configurações de E2E
  e2e: {
    baseUrl: 'https://www.amazon.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Aumentar o timeout padrão pode ser útil para sites como a Amazon
    defaultCommandTimeout: 10000, // 10 segundos
    pageLoadTimeout: 60000,       // 60 segundos
  },

  // Configurações do Reporter (Mochawesome)
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },

  // Outras configurações globais do Cypress podem vir aqui, se necessário
  // Ex: video: false, (se não quiser vídeos)
});