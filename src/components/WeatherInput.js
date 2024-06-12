import React, { useState } from 'react';
import '../style/style.css';

// Component for weather input form
function WeatherInput({ setCityName, fetchCityCoordinates, fetchUserCoordinates }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  // Handle search button click
  const handleSearch = () => {
    setCityName(inputValue); 
    fetchCityCoordinates(inputValue);
    setInputValue(''); 
  };

  // Handle "Enter" key press for initiating search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-input">
      <h3>Enter a City Name</h3>
      <input
        className="city-input"
        type="text"
        placeholder="E.g., New York, London, Tokyo"
        value={inputValue}
        onChange={handleInputChange} // Update input value on change
        onKeyPress={handleKeyPress} 
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
      <div className="separator"></div>
      <button className="location-btn" onClick={fetchUserCoordinates}>Current Location</button>
    </div>
  );
}

export default WeatherInput;
