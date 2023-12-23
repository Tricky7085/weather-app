const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const weatherRoutes = require('./src/routes/weatherRoutes');
app.use('/weather', weatherRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});