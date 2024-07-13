
import React from "react";
import CurrentWeather from "./CurrentWeather";
import "../style/style.css";

// Function to get the appropriate animation class based on the weather condition
const getWeatherAnimation = (weatherMain) => {
  switch (weatherMain.toLowerCase()) {
    case "rain":
      return "rain";
    case "clouds":
      return "clouds";
    case "clear":
      return "clear";
    default:
      return "";
  }
};

// Component to display weather data
const WeatherData = ({ cityName, weatherData }) => {
  // Placeholder content to display when there is no weather data
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

  const { name, data } = weatherData;

  return (
    <div className="weather-data">
      {/* Display current weather */}
      <CurrentWeather cityName={name} weatherItem={data.list[0]} />

      {/* Display 5-day weather forecast */}
      <div className="days-forecast">
        <h2>5-Day Forecast</h2>
        <ul className="weather-cards">
          {/* Display weather forecast for each day */}
          {data.list.slice(1, 6).map((weatherItem, index) => (
            <li key={index} className="card">
              <h3>({weatherItem.dt_txt.split(" ")[0]})</h3>
              <div className="icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
                  alt="weather-icon"
                  className={getWeatherAnimation(weatherItem.weather[0].main)}
                />
                <h6>{weatherItem.weather[0].description}</h6>
              </div>
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





