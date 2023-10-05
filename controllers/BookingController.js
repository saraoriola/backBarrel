const { Booking, User, Event, Token } = require('../models/index');

const BookingController = {
    async createBooking(req, res) {
        try {
          const userId = req.user.id;           
          const eventId = req.params.eventId; 
          const { description } = req.body;

          const existingBooking = await Booking.findOne({
            where: { userId, eventId },
          });

          if (existingBooking) {
            return res.status(400).json({ error: 'Ya tienes una reserva para este evento' });
          }

          const newBooking = await Booking.create({
            status: 'pending',
            EventId: eventId, 
            UserId: userId,   
            description: description,
          });
          
          return res.status(201).json(newBooking);
        } catch (error) {
          console.error('Error al crear la reserva:', error);
          return res.status(500).json({ error: 'Error al crear la reserva' });
        }
    },
};

module.exports = BookingController;
