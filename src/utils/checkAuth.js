const { verify } = require("jsonwebtoken");

const checkJWT = (authorization) => {
  const { JWT_KEY } = process.env;
  const [, token] = authorization.split(" ");
  const decoded = verify(token, JWT_KEY || "");
  return { _id: decoded._id };
};

const checkAuth = (request, response, done) => {
  const { authorization } = request.headers;
  if (!authorization) {
    response.code(401).send({ message: "Não autorizado" });
  }
  try {
    const { _id } = checkJWT(authorization);
    request.loggedUser = _id;
    done();
  } catch (error) {
    response.code(401).send({ message: "Não autorizado" });
  }
};

module.exports = checkAuth;
