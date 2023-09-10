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

  const Search = async () => {
    const elem = document.getElementsByClassName("cityInput");
    if (elem[0].value===" ") {
      return 0;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${elem[0].value}&units=Metric&appid=${apiKey}`;
    let response = await fetch(apiUrl);
    let data = response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-images");
    const location = document.getElementsByClassName("cityName");

    humidity[0].innerHTML = data.main.humidity + " % ";
    wind[0].innerHTML = data.wind.speed + " mi/h ";
    temperature[0].innerHTML = data.main.temp + " ℃ ";
    location[0].innerHTML = data.name;
  };
  return (
    <div className="Container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city..." />
        <div className="search-icon" onClick={()=>{Search()}}>
          <img src={search_icon} alt="icon" />
        </div>
      </div>
      <div className="weather-location">France</div>
      <div className="weather-temp">24℃</div>
      <div className="weather-image">
        <img src={sunrise} alt="" />
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} alt="icon" />
          <div className="data">
            <div className="humidity-percent">78%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy} alt="" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
