const UserModule = require("../../models/User");

const getUsers = async () => {
  const collection = await UserModule.getCollection();
  const users = await collection.find({}).toArray();
  return users.map((user) => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
};

module.exports = getUsers;
