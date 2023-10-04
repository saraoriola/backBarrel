const { User } = require('../models/index');

const UserController = {
  async registerUser(req, res) {
    const { firstName, lastName, email } = req.body;
    try {
      const user = await User.create({ firstName, lastName, email });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Error al crear usuario' });
    }
  },


};

module.exports = UserController;
