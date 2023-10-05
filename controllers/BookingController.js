const { Booking } = require('../models/index');

const BookingController = {
    async createBooking(req, res) {
        try {
          const { id } = req.params; 
          console.log('ID del evento:', id);
          
          const userId = req.user.id;
          console.log('ID del usuario:', userId);

          const existingBooking = await Booking.findOne({
            where: { userId, id },
          });

          if (existingBooking) {
            console.log('Ya tienes una reserva para este evento');
            return res.status(400).json({ error: 'Ya tienes una reserva para este evento' });
          }

          const newBooking = await Booking.create({ userId, id });

          return res.status(201).json(newBooking);
        } catch (error) {
          console.error('Error al crear la reserva:', error);
          return res.status(500).json({ error: 'Error al crear la reserva' });
        }
      },
};

module.exports = BookingController;
