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

  async updateUser(req, res) {
    const { id } = req.params; 
    const { firstName, lastName, email } = req.body; 

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;

      await user.save();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Error al actualizar usuario' });
    }
  },

  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      await user.destroy();

      return res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  },
  
};

module.exports = UserController;
