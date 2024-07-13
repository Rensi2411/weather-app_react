import React from "react";
import "../style/tailwind.css";


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

const CurrentWeather = ({ cityName, weatherItem }) => (
  <div className="current-weather flex flex-col items-center">
    <div className="details text-center mb-4">
      <h2 className="text-2xl font-bold">{`${cityName} (${weatherItem.dt_txt})`}</h2>
      <h6 className="text-xl">{`Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C`}</h6>
      <h6 className="text-xl">{`Wind: ${weatherItem.wind.speed} M/S`}</h6>
      <h6 className="text-xl">{`AQI: ${weatherItem.main.humidity}`}</h6>
    </div>
    <div className="icon">
      <img
        src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
        alt="weather-icon"
        className={getWeatherAnimation(weatherItem.weather[0].main)}
      />
      <h6 className="text-xl">{weatherItem.weather[0].description}</h6>
    </div>
  </div>
);

export default CurrentWeather;
