const UserModule = require("../../models/User");
const { encryptPassword } = require("../../utils/password");

const createUser = async (request, response) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password) {
    response.code(400).send({ message: "Dados obrigatórios não preenchidos." });
  }

  const collection = await UserModule.getCollection();
  const { insertedId } = await collection.insertOne({
    username,
    email,
    password: encryptPassword({ password }),
  });
  const { password: createdUserPassword, ...createdUser } =
    await collection.findOne({ _id: insertedId }, { username: 0 });
  return createdUser;
};

module.exports = createUser;
