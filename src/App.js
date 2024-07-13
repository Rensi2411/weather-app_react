import React, { useState, useEffect } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherData from './components/WeatherData';
import './style/style.css';

function App() {
  const [cityName, setCityName] = useState('Vrindavan'); // Default city is vrindavan
  const [weatherData, setWeatherData] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  useEffect(() => {
    // Fetch weather data for Vrindavan when the app loads
    fetchCityCoordinates('Vrindavan');
  }, []);

  const fetchWeatherData = async (latitude, longitude, name) => {
    const API_KEY = "97043ad8e69c222ce4864af5799b52d6";
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    try {
      const response = await fetch(WEATHER_API_URL);
      const data = await response.json();
      console.log(data)
      setWeatherData({ name, data });
    } catch (error) {
      alert("An error occurred while fetching the weather forecast!");
    }
  };

  const fetchCityCoordinates = async (cityName) => {
    const API_KEY = "97043ad8e69c222ce4864af5799b52d6";
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      if (!data.length) {
        return alert(`No coordinates found for ${cityName}`);
      }
      const { lat, lon, name } = data[0];
      fetchWeatherData(lat, lon, name);
    } catch (error) {
      alert("An error occurred while fetching the coordinates!");
    }
  };

  const fetchUserCoordinates = () => {
    const lastLocation = localStorage.getItem('lastLocation');
    if (lastLocation) {
      const { name, latitude, longitude } = JSON.parse(lastLocation);
      fetchWeatherData(latitude, longitude, name);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const API_KEY = "97043ad8e69c222ce4864af5799b52d6";
          const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
          fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
              const { name } = data[0];
              localStorage.setItem('lastLocation', JSON.stringify({ name, latitude, longitude }));
              fetchWeatherData(latitude, longitude, name);
            })
            .catch(() => {
              alert("An error occurred while fetching the city name!");
            });
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("Geolocation request denied. Please reset location permission to grant access again.");
          } else {
            alert("Geolocation request error. Please reset location permission.");
          }
        }
      );
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <div className="header">
        <h1>Weather</h1>
        <label className="switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="container">
        <WeatherInput
          setCityName={setCityName}
          fetchCityCoordinates={fetchCityCoordinates}
          fetchUserCoordinates={fetchUserCoordinates}
        />
        <WeatherData cityName={cityName} weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
