const { ObjectId } = require("bson");
const UserModule = require("../../models/User");

const getUser = async (request) => {
  const id = request.params.id;
  const collection = await UserModule.getCollection();
  const { password, ...user } = await collection.findOne({ _id: ObjectId(id) });
  return user;
};

module.exports = getUser;
