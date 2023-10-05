const express = require('express');
const EventController = require('../controllers/EventController');
const BookingController = require('../controllers/BookingController');
const { authentication } = require('../middleware/authentication');
const router = express.Router();

router.post('/createEvent', authentication, EventController.createEvent);
router.get('/getAllEvents', EventController.getAllEvents);
router.get('/:id', authentication, EventController.getEventById);
router.put('/updateEvent/:id', authentication, EventController.updateEvent);
router.delete('/deleteEvent/:id', authentication, EventController.deleteEvent);

router.post('/:eventId/createBooking',authentication, BookingController.createBooking);

module.exports = router;
