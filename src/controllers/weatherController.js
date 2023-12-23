const axios = require('axios');

const Weather = require('../models/weatherModel');

exports.getWeather = async (req, res)=>{
    try{
        const {location} = req.params;
        const response = await axios.get(process.env.API_ENDPOINT, {
            params:{
                q: location,
                appid: process.env.API_KEY,
            },
        });

        const temperature = response.data.main.temp;
        const newWeather = new Weather({location, temperature});
        await newWeather.save();
        res.status(200).json(newWeather);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'ERROR'})
    }
};
exports.addWeather = async (req, res)=>{
    try{
        const {location, temperature} = req.body;
        const newWeather = new Weather({location, temperature});
        await newWeather.save();
        res.status(200).json(newWeather);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'ERROR'})
    }
};
exports.getAllWeather = async (_req, res)=>{
    try{
        const weatherData = await Weather.find();
        res.status(200).json(weatherData);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'ERROR'})
    }
};
exports.updateWeather = async (req, res)=>{
    try{
        const {id} = req.params;
        const updatedWeather = await Weather.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200),json(updatedWeather);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'ERROR'})
    }
};
exports.deleteWeather = async (req, res)=>{
    try{
        const {id} = req.params;
        await Weather.findByIdAndDelete(id);
        res.status(204).send(); 
    }catch(error){
        console.log(error);
        res.status(500),json({message: 'ERROR'})
    }
}