const express = require('express');
const EventController = require('../controllers/EventController');
const router = express.Router();

router.post('/createEvent', EventController.createEvent);
router.get('/getAllEvents', EventController.getAllEvents);

module.exports = router;
