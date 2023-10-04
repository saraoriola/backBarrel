const { Event } = require('../models/index');

const EventController = {

  async createEvent(req, res) {
    const { title, date, location } = req.body;
    try {
      const event = await Event.create({ title, date, location });
      return res.status(201).json(event);
    } catch (error) {
      return res.status(400).json({ error: 'Error al crear evento' });
    }
  },

};

module.exports = EventController;
