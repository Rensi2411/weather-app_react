import React from 'react';
import '../style/style.css';

const WeatherCard = ({ weatherItem }) => (
  <li>
    <h3>{weatherItem.dt_txt.split(" ")[0]}</h3>
    <img
      src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
      alt="weather-icon"
    />
    <h6>{`${(weatherItem.main.temp - 273.15).toFixed(2)}°C`}</h6>
  </li>
);

export default WeatherCard;
