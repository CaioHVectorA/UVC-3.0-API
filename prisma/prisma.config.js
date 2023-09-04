// prisma/prisma.config.js
module.exports = {
    development: {
      // Configurações para o ambiente de desenvolvimento
      // ...
    },
    test: {
      client: 'sqlite',
      connection: {
        filename: './test.db', // Arquivo SQLite em memória para testes
      },
      // Configurações adicionais para o ambiente de teste
      // ...
    },
  };