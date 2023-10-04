const { User, Token, Sequelize } = require("../models");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findByPk(payload.id);

    if (!user) {
      return res.status(401).send({ message: "Usuario no encontrado" });
    }

    const tokenFound = await Token.findOne({
      where: {
        userId: user.id,
        token: token,
      },
    });

    if (!tokenFound) {
      return res.status(401).send({ message: "No estás autorizado" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, message: "Token de autorización no proporcionado" });
  }
};


module.exports = { authentication};