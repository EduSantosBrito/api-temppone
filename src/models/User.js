const Database = require("../db");

const COLLECTION_NAME = "user";

module.exports = class UserModule {
  static async getCollection() {
    const db = await Database.database;
    return db.collection(COLLECTION_NAME);
  }
};
