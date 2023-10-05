const { Booking } = require('../models/index');

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

  async getMyBookings(req, res) {
    try {
      const { userId } = req.params;

      const bookings = await Booking.findAll({
        where: { userId },
        attributes: { exclude: ['EventId', 'UserId'] },
      });

      return res.status(200).json(bookings);
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
      return res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  },

  async getBookingById(req, res) {
    try {
      const { bookingId } = req.params;

      const booking = await Booking.findOne({
        where: { id: bookingId },
        attributes: { exclude: ['EventId', 'UserId'] },
      });

      if (!booking) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }

      return res.status(200).json(booking);
    } catch (error) {
      console.error('Error al obtener la reserva por ID:', error);
      return res.status(500).json({ error: 'Error al obtener la reserva por ID' });
    }
  },

  async updateBooking(req, res) {
    try {
      const { bookingId } = req.params;
      const { description } = req.body;

      const booking = await Booking.findOne({
        where: { id: bookingId },
      });

      if (!booking) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }

      booking.description = description;

      await booking.save();

      return res.status(200).json(booking);
    } catch (error) {
      console.error('Error al actualizar la reserva:', error);
      return res.status(500).json({ error: 'Error al actualizar la reserva' });
    }
  },

  async deleteBooking(req, res) {
    try {
      const { bookingId } = req.params;
  
      const booking = await Booking.findOne({
        where: { id: bookingId },
      });
  
      if (!booking) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }
  
      await booking.destroy({ force: false });
  
      return res.status(204).json({ message: 'Reserva marcada como eliminada con éxito' });
    } catch (error) {
      console.error('Error al marcar la reserva como eliminada:', error);
      return res.status(500).json({ error: 'Error al marcar la reserva como eliminada' });
    }
  },
  
};

module.exports = BookingController;
