import React from "react";
import CurrentWeather from "./CurrentWeather";
import '../style/tailwind.css';

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

const WeatherData = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="weather-data text-center">
        <div className="current-weather mb-4">
          <div className="details">
            <h2 className="text-2xl font-bold">_______ ( ______ )</h2>
            <h6 className="text-xl">Temperature: __°C</h6>
            <h6 className="text-xl">Wind: __ M/S</h6>
            <h6 className="text-xl">AQI: __%</h6>
          </div>
        </div>
        <div className="days-forecast">
          <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
          <ul className="weather-cards grid grid-cols-1 md:grid-cols-5 gap-4">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="card p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold">( ______ )</h3>
                <h6 className="text-xl">Temp: __C</h6>
                <h6 className="text-xl">Wind: __ M/S</h6>
                <h6 className="text-xl">AQI: __%</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const { name, data } = weatherData;

  return (
    <div className="weather-data text-center">
      <CurrentWeather cityName={name} weatherItem={data.list[0]} />
      <div className="days-forecast mt-8">
        <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
        <ul className="weather-cards grid grid-cols-1 md:grid-cols-5 gap-4">
          {data.list.slice(1, 6).map((weatherItem, index) => (
            <li key={index} className="card p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-semibold">{weatherItem.dt_txt.split(" ")[0]}</h3>
              <div className="icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
                  alt="weather-icon"
                  className={getWeatherAnimation(weatherItem.weather[0].main)}
                />
                <h6 className="text-xl">{weatherItem.weather[0].description}</h6>
              </div>
              <h6 className="text-xl">Temp: {(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
              <h6 className="text-xl">Wind: {weatherItem.wind.speed} M/S</h6>
              <h6 className="text-xl">AQI: {weatherItem.main.humidity}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherData;



