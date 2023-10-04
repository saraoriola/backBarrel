const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/register', UserController.registerUser);
router.get('/getAllUsers', UserController.getAllUsers);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;