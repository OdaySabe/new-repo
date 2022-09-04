const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allCitiesSechama = new Schema({
  CityimageSrc: String,
  CityDetails: {
    continent: String,
    FullName: String,
    mayor: String,
    boundingBox: {
      east: Number,
      north: Number,
      south: Number,
      west: Number,
    },
  },
});
const allCities = mongoose.model("CITIES", allCitiesSechama);
module.exports = allCities;
