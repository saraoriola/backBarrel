const express = require('express');
const UserController = require('../controllers/UserController');
const { authentication } = require('../middleware/authentication');
const BookingController = require('../controllers/BookingController');
const router = express.Router();

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/getAllUsers', authentication, UserController.getAllUsers);
router.put('/updateUser/:id', authentication, UserController.updateUser);
router.delete('/deleteUser/:id', authentication, UserController.deleteUser);

router.get('/myBookings/:userId', BookingController.getMyBookings);

module.exports = router;