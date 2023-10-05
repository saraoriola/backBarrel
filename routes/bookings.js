const express = require('express');
const BookingController = require('../controllers/BookingController');
const { authentication } = require('../middleware/authentication');
const router = express.Router();

router.get('/:bookingId', authentication, BookingController.getBookingById);
router.put('/updateBooking/:bookingId', authentication, BookingController.updateBooking);
router.delete('/deleteBooking/:bookingId', authentication, BookingController.deleteBooking);

module.exports = router;
