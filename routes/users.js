const express = require('express');
const UserController = require('../controllers/UserController');
const { authentication } = require('../middleware/authentication');
const router = express.Router();

router.post('/register', UserController.registerUser);
router.post('/loginUser', UserController.loginUser);
router.get('/getAllUsers', UserController.getAllUsers);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;