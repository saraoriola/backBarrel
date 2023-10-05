const express = require('express');
const EventController = require('../controllers/EventController');
const BookingController = require('../controllers/BookingController');
const { authentication } = require('../middleware/authentication');
const router = express.Router();

router.post('/createEvent', EventController.createEvent);
router.get('/getAllEvents', EventController.getAllEvents);
router.get('/:id', EventController.getEventById);
router.put('/updateEvent/:id', EventController.updateEvent);
router.delete('/deleteEvent/:id', EventController.deleteEvent);

router.post('/:eventId/createBooking',authentication, BookingController.createBooking);

module.exports = router;
