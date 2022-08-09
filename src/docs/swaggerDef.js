/*
   docs Name : swaggerDef
*/

const { version } = require("../../package.json");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Movies-fortunesoft",
    description: "08/08/2022",
    version,
  },
  servers: [
    {
      url: "http://localhost:3000/v1", // change url based on (local/production)
    },
    {
      url: "https://movies-list-fortunesoft.herokuapp.com/v1",
    },
  ],
};

module.exports = swaggerDef;
