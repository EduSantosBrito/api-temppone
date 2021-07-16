// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const Database = require("./db");
const dotenv = require("dotenv");
dotenv.config();

fastify.register(require("./routes/user"), { prefix: "/user" });
fastify.register(require("./routes/auth"), { prefix: "/auth" });

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    await Database.connect();
    console.log("MongoDB Connected successfully :)");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
