import React from 'react';
import '../style/tailwind.css';

const WeatherCard = ({ weatherItem }) => (
  <li className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
    <h3 className="text-lg font-semibold">{weatherItem.dt_txt.split(" ")[0]}</h3>
    <img
      src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
      alt="weather-icon"
    />
    <h6 className="text-xl">{`${(weatherItem.main.temp - 273.15).toFixed(2)}°C`}</h6>
  </li>
);

export default WeatherCard;
