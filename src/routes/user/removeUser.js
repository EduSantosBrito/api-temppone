const { ObjectId } = require("bson");
const UserModule = require("../../models/User");

const removeUser = async (request, response) => {
  const id = request.params.id;
  const collection = await UserModule.getCollection();
  const { deletedCount } = await collection.remove(
    { _id: ObjectId(id) },
    { justOne: true }
  );
  if (deletedCount) {
    return { message: "Usuário deletado com sucesso" };
  }
  response.code(400).send({ message: "Algo deu errado ao remover o usuário" });
};

module.exports = removeUser;
