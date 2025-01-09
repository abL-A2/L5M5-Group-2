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

module.exports = mongoose.model("stationSchema", stationSchema);
