const UserModule = require("../../models/User");

const getUser = async (request) => {
  const username = request.params.username;
  const collection = await UserModule.getCollection();
  const { password, ...user } = await collection.findOne({ username });
  return user;
};

module.exports = getUser;
