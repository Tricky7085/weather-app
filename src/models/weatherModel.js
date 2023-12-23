const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    location : String,
    temperature : Number,
});

const weather = mongoose.model('weather', weatherSchema);

module.exports = weather;