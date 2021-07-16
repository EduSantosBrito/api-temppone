const createUser = require("./createUser");
const getUser = require("./getUser");
const getUsers = require("./getUsers");
const removeUser = require("./removeUser");
const updateUser = require("./updateUser");

async function routes(fastify) {
  fastify.post("/", createUser);
  fastify.get("/", getUsers);
  fastify.get("/:id", getUser);
  fastify.put("/:id", updateUser);
  fastify.delete("/:id", removeUser);
}

module.exports = routes;
