const { ObjectId } = require("bson");
const UserModule = require("../../models/User");

const updateUser = async (request, response) => {
  const id = request.params.id;
  const collection = await UserModule.getCollection();
  const user = await collection.findOne({ _id: ObjectId(id) });
  if (!user) {
    response.code(404).send({ message: "Usuário não encontrado" });
  }
  await collection.updateOne({ _id: ObjectId(id) }, { $set: request.body });
  const { password, ...updatedUser } = await collection.findOne({
    _id: ObjectId(id),
  });
  return updatedUser;
};

module.exports = updateUser;
