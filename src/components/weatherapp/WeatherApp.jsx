import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/searchicon.png";
import cloudy from "../Assets/cloudy.png";
import rainy from "../Assets/rainy.png";
import drizzle from "../Assets/drizzle.png";
import humidityicon from "../Assets/humidity.png";
import snowy from "../Assets/snowy.png";
import suny from "../Assets/suny.png";
import sunrise from "../Assets/weathersunrise.png";
import windy from "../Assets/wind.png";

const WeatherApp = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const searchMethod = async () => {
    const elem = document.getElementsByClassName("cityInput");
    if (elem[0].value === " ") {
      return 0;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${elem[0].value}&units=Metric&appid=${apiKey}`
    let response = await fetch(apiUrl);
    let data = response.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("windspeed");
    const temperature = document.getElementsByClassName("temperature");
    const location = document.getElementsByClassName("cityName");

    humidity[0].innerHTML = data.main.humidity+ " % ";
    wind[0].innerHTML = data.wind.speed+ " mi/h ";
    temperature[0].innerHTML = data.main.temp+ " ℃ " ;
    location[0].innerHTML = data.name;
  };
  return (
    <div className="weatherContainer">
      <div className="searchContainer">
        <input type="text" className="cityInput" placeholder="Search city..." />
        <div className="search-icon" onClick={()=>searchMethod()}>
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
            <img src={humidityicon} alt="" className="icon" />
            <h1>Humidity</h1>
            70%
          </div>
        </div>
        <div className="data-container">
          <div className="temperature">
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
