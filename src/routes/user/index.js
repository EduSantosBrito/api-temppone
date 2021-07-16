const checkAuth = require("../../utils/checkAuth");
const createUser = require("./createUser");
const getUser = require("./getUser");
const getUsers = require("./getUsers");
const removeUser = require("./removeUser");
const updateUser = require("./updateUser");

async function routes(fastify) {
  fastify.post("/", createUser);
  fastify.get("/", { preValidation: checkAuth }, getUsers);
  fastify.get("/:username", { preValidation: checkAuth }, getUser);
  fastify.put("/:id", { preValidation: checkAuth }, updateUser);
  fastify.delete("/:id", { preValidation: checkAuth }, removeUser);
}

module.exports = routes;
