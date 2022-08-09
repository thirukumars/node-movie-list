/*
   docs Name : swaggerDef
*/

const { version } = require('../../package.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Paradigm',
    description: '07/05/2021',
    version,
  },
  servers: [
    {
      url: 'http://localhost:3000/v1', // change url based on (local/production)
    },
  ],
};

module.exports = swaggerDef;
