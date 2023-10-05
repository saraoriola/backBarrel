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
          return res.json(events);
        } catch (error) {
          console.error("Error al obtener eventos:", error); 
          return res.status(500).json({ error: 'Error al obtener eventos' });
        }
      },
      async updateEvent(req, res) {
        const { id } = req.params; 
        const { title, date, location } = req.body;
      
        try {
          const event = await Event.findByPk(id);
      
          if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado' });
          }
      
          event.title = title;
          event.date = date;
          event.location = location;
      
          await event.save();
      
          return res.status(200).json({ message: 'Evento actualizado correctamente', event });
        } catch (error) {
          console.error('Error al actualizar el evento:', error);
          return res.status(500).json({ error: 'Error al actualizar el evento' });
        }
      },

      async deleteEvent(req, res) {
        const { id } = req.params; 
      
        try {
          const event = await Event.findByPk(id);
      
          if (!event) {
            return res.status(404).json({ error: 'Evento no encontrado' });
          }
          await event.destroy();
      
          return res.status(200).json({ message: 'Evento eliminado correctamente' });
        } catch (error) {
          console.error('Error al eliminar el evento:', error);
          return res.status(500).json({ error: 'Error al eliminar el evento' });
        }
      }

};

module.exports = EventController;
