const { User, Token } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require("../config/config.json")["development"];

const UserController = {
  async registerUser(req, res) {
    const { name, surname, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        surname,
        email,
        password: hashedPassword,
      });
    
      return res.status(201).json(user);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      return res.status(400).json({ error: 'Error al crear usuario' });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;
    try {  
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }
    
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
  
      const token = jwt.sign({ id: user.id }, jwt_secret, { expiresIn: '1h' });
  
      const newToken = await Token.create({ userId: user.id, token });
  
      return res.status(200).json({user, token });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return res.status(500).json({ error: 'Error al iniciar sesión' });
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
    const { name, surname, email } = req.body; 

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      user.name = name;
      user.surname = surname;
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
