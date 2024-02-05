// WeatherDashboard.js

import React, { useState } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=69f06c06e7698137c5a5d2c2e365f6ea`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div style={{position:"relative",left:"",top:"50px"}}>
      <h1 style={{position:"relative",left:"40px"}}>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      style={{width:"80%",height:"40px",fontWeight:"bold"}}/>
      <button onClick={getWeather} style={{height:"40px",position:"relative",left:"10px",fontWeight:"bold"}}>Get Weather</button>
       
       <br/><br/>
      {weatherData && (
        <div style={{backgroundColor:"black",color:"white",width:"400px",height:"300px",position:"relative",left:"30px"}}>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            style={{position:"relative",top:"20px",left:"20px"}}
            width={100}
            height={100}


          />
          <h2 style={{position:"relative",left:"20px"}}>{weatherData.weather[0].description}</h2>
          <p style={{position:"relative",left:"20px"}}>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p style={{position:"relative",left:"20px"}}>Humidity: {weatherData.main.humidity}%</p>
          
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;

