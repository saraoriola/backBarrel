const { Event } = require('../models/index');

const EventController = {

    async createEvent(req, res) {
        const { title, date, location } = req.body;
        try {
          const event = await Event.create({ title, date, location });
    
          const formattedEvent = {
            id: event.id,
            title: event.title,
            date: new Date(event.date).toLocaleString(), 
            location: event.location,
            updatedAt: new Date(event.updatedAt).toLocaleString(), 
            createdAt: new Date(event.createdAt).toLocaleString() 
          };
    
          return res.status(201).json(formattedEvent);
        } catch (error) {
          return res.status(400).json({ error: 'Error al crear evento' });
        }
      },

      async getAllEvents(req, res) {
        try {
          const events = await Event.findAll();
          console.log("Events:", events);
          return res.json(events);
        } catch (error) {
          console.error("Error al obtener eventos:", error); // Agrega este registro
          return res.status(500).json({ error: 'Error al obtener eventos' });
        }
      },
      

};

module.exports = EventController;
