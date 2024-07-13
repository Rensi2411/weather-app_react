import React from 'react';
import '../style/style.css';

// WeatherCard component displays weather information for a specific day
const WeatherCard = ({ weatherItem }) => (
  <li>
    {/* Display the date of the weather forecast */}
    <h3>{weatherItem.dt_txt.split(" ")[0]}</h3>
    <img
      src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
      alt="weather-icon"
    />
    {/* Display the temperature in Celsius for the forecasted day */}
    <h6>{`${(weatherItem.main.temp - 273.15).toFixed(2)}°C`}</h6>
  </li>
);

export default WeatherCard;