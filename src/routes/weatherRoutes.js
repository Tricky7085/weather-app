const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/:location', weatherController.getWeather);

router.post('/', weatherController.addWeather);

router.get('/', weatherController.getAllWeather);

router.put('/:id', weatherController.getAllWeather);

router.delete('/:id', weatherController.deleteWeather);

module.exports = router;