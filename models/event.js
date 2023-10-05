'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.hasMany(models.Booking, { foreignKey: 'eventId' }); 
    }
  }

  Event.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events', 
  });

  return Event;
};
