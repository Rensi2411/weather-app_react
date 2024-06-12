import React from 'react';
import '../style/style.css';

const WeatherData = ({ cityName, weatherData }) => {
  // Check if weatherData is null or undefined
  if (!weatherData) {
    return (
      <div className="weather-data">
        <div className="current-weather">
          <div className="details">
            <h2>_______ ( ______ )</h2>
            <h6>Temperature: __°C</h6>
            <h6>Wind: __ M/S</h6>
            <h6>Humidity: __%</h6>
          </div>
        </div>
        <div className="days-forecast">
          <h2>5-Day Forecast</h2>
          <ul className="weather-cards">
            {/* Placeholder cards */}
            {[...Array(5)].map((_, index) => (
              <li key={index} className="card">
                <h3>( ______ )</h3>
                <h6>Temp: __C</h6>
                <h6>Wind: __ M/S</h6>
                <h6>Humidity: __%</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Actual weather data is available, render it
  const { name, data } = weatherData;

  // Render actual weather data
  return (
    <div className="weather-data">
      <div className="current-weather">
        <div className="details">
          <h2>{name} ({data.dt_txt ? data.dt_txt.split(" ")[0] : 'Unknown Date'})</h2>
          <h6>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</h6>
          <h6>Wind: {data.wind.speed} M/S</h6>
          <h6>Humidity: {data.main.humidity}%</h6>
        </div>
      </div>
      <div className="days-forecast">
        <h2>5-Day Forecast</h2>
        <ul className="weather-cards">
          {/* Render actual weather cards */}
          {data.list.slice(1, 6).map((weatherItem, index) => (
            <li key={index} className="card">
              <h3>({weatherItem.dt_txt ? weatherItem.dt_txt.split(" ")[0] : 'Unknown Date'})</h3>
              <h6>Temp: {(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
              <h6>Wind: {weatherItem.wind.speed} M/S</h6>
              <h6>Humidity: {weatherItem.main.humidity}%</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherData;
