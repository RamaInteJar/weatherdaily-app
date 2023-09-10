import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/searchicon.png";
import cloudy from "../Assets/cloudy.png";
import rainy from "../Assets/rainy.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import snowy from "../Assets/snowy.png";
import suny from "../Assets/suny.png";
import sunrise from "../Assets/weathersunrise.png";
import windy from "../Assets/wind.png";

const WeatherApp = () => {
    let api_key = "4fd890749299f03b2846ca22964ea129"
  return (
    <div className="weatherContainer">
      <div className="searchContainer">
        <input type="text" className="cityInput" placeholder="Search city..." />
        <div className="search-icon">
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="cityName">France</div>
      <div className="weather-images">
        <div>24℃</div>
        <img src={cloudy} alt="" />
      </div>
      <div className="element">
        <div className="data-container">
          <div className="humidity-percentage">
            <img src={humidity} alt="" className="icon" />
            <h1>Humidity</h1>
            70%
          </div>
        </div>
        <div className="data-container">
          <div className="temperature">
            <img src={humidity} alt="" className="icon" />
            <h1>temperature</h1>
           77℉
          </div>
        </div>
        <div className="data-container">
          <div className="windspeed">
            <img src={windy} alt="" className="icon" />
            <h1>Wind speed</h1>
            15m/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
