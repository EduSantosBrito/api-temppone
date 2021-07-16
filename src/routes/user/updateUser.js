const { ObjectId } = require("bson");
const UserModule = require("../../models/User");

const updateUser = async (request, response) => {
  const id = request.params.id;
  const _id = ObjectId(id);
  const collection = await UserModule.getCollection();
  if (request.loggedUser !== _id) {
    response.code(401).send({ message: "Não autorizado" });
  }
  const user = await collection.findOne({ _id });
  if (!user) {
    response.code(404).send({ message: "Usuário não encontrado" });
  }
  await collection.updateOne({ _id }, { $set: request.body });
  const { password, ...updatedUser } = await collection.findOne({
    _id,
  });
  return updatedUser;
};

module.exports = updateUser;
