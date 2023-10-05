const express = require('express');
const EventController = require('../controllers/EventController');
const { authentication } = require('../middleware/authentication');
const router = express.Router();

router.post('/createEvent', authentication, EventController.createEvent);
router.get('/getAllEvents', EventController.getAllEvents);
router.get('/:id', authentication, EventController.getEventById);
router.put('/updateEvent/:id', authentication, EventController.updateEvent);
router.delete('/deleteEvent/:id', authentication, EventController.deleteEvent);

module.exports = router;
