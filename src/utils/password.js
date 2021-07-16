const bcrypt = require("bcrypt");

const encryptPassword = ({ password }) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

const comparePassword = ({ password, passwordToCompare }) => {
  return bcrypt.compareSync(password, passwordToCompare);
};

module.exports = {
  encryptPassword,
  comparePassword,
};
