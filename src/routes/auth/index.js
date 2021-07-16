const login = require("./login");

async function routes(fastify) {
  fastify.post("/", login);
}

module.exports = routes;
