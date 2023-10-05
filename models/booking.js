'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'userId' }); 
      Booking.belongsTo(models.Event, { foreignKey: 'eventId' }); 
    }
  }

  Booking.init({
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },    
    createdAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings', 
  });

  return Booking;
};
