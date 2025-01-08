const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  station_id: Number,
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  fuel_types: Array,
  services: Array,
  price_per_litre: Object,
  station_type: Array,
  opening_hours: Object,
});

// below is the table information suggested by UX team
// station_id	INT (Primary Key)	Unique identifier for each station.
// name	VARCHAR	Station name.
// address	TEXT	Station address.
// latitude	DECIMAL	Latitude for geolocation.
// longitude	DECIMAL	Longitude for geolocation.
// fuel_types	JSONB	Fuel types available (e.g., Diesel, EV).
// amenities	JSONB	List of amenities (e.g., Car Wash, Shop).
// price_per_litre	JSONB	Fuel price data (e.g., petrol: $2.50/L).

module.exports = mongoose.model("stationSchema", stationSchema);
