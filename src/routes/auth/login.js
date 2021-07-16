const jwt = require("jsonwebtoken");
const UserModel = require("../../models/User");
const { comparePassword } = require("../../utils/password");

const login = async (request, response) => {
  const { email, password } = request.body;
  const collection = await UserModel.getCollection();
  const user = await collection.findOne({ email });
  if (
    !user ||
    !comparePassword({ password, passwordToCompare: user.password })
  ) {
    response.code(400).send({ message: "Email ou senha inválidos" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  return { token };
};

module.exports = login;
