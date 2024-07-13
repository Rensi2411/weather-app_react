import React from "react";
import "../style/style.css";

// Function to return appropriate animation class based on weather type
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

// Component to display current weather information
const CurrentWeather = ({ cityName, weatherItem }) => (
  <div className="current-weather">
    <div className="details">
      {/* Display city name and updated date and time */}
      <h2>{`${cityName} (${weatherItem.dt_txt})`}</h2>

      {/* Display temperature in Celsius */}
      <h6>{`Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C`}</h6>

      <h6>{`Wind: ${weatherItem.wind.speed} M/S`}</h6>

      <h6>{`Humidity: ${weatherItem.main.humidity}%`}</h6>
    </div>
    <div className="icon">
      {/* Display weather icon with appropriate animation class */}
      <img
        src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
        alt="weather-icon"
        className={getWeatherAnimation(weatherItem.weather[0].main)}
      />

      <h6>{weatherItem.weather[0].description}</h6>
    </div>
  </div>
);

export default CurrentWeather;

