const { MongoClient } = require("mongodb");

module.exports = class Database {
  static _client;

  static _database;

  static get client() {
    return this._client;
  }

  static get database() {
    if (!this._database) {
      return this.connect();
    }
    return this._database;
  }

  static _setDatabase(newDatabase) {
    this._database = newDatabase;
    return newDatabase;
  }

  static async connect() {
    if (!this._client) {
      this._client = new MongoClient(process.env.MONGO_ATLAS_URI ?? "", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      return this.connect();
    }
    await this.client.connect();
    return this._setDatabase(this.client.db());
  }

  static close() {
    return this.client?.close();
  }
};
