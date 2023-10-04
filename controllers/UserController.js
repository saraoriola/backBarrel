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

  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },
  
};

module.exports = UserController;
