import React, { useState } from 'react';
import '../style/tailwind.css';

function WeatherInput({ setCityName, fetchCityCoordinates, fetchUserCoordinates }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSearch = () => {
    setCityName(inputValue);
    fetchCityCoordinates(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-input flex flex-col items-center mb-8">
      <h3 className="text-4xl mb-4">Enter a City Name</h3>
      <input
        className="city-input p-2 border border-gray-400 rounded mb-4"
        type="text"
        placeholder="E.g., New York, London, Tokyo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-btn p-2 bg-blue-500 text-white rounded mb-4" onClick={handleSearch}>Search</button>
      <div className="separator mb-4"></div>
      <button className="location-btn p-2 bg-green-500 text-white rounded" onClick={fetchUserCoordinates}>Current Location</button>
    </div>
  );
}

export default WeatherInput;
