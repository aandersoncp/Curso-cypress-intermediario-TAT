
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false, // Indica para o cypress que a pasta fixture não será utilizada e mesmo quando ela não existir então ela não será recriada
  video: false, //Desliga a funcionalidade de gravar vídeos quando cypress é executado no modo headless
})
