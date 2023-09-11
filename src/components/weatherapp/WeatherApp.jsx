import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/searchicon.png";
import humidityicon from "../Assets/humidity.png";
import sunrise from "../Assets/weathersunrise.png";
import windy from "../Assets/wind.png";

const WeatherApp = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState({
    humidity: "78%", // Default value
    windSpeed: "18km/h", // Default value
    temperature: "24℃", // Default value
    location: "France", // Default value
  });

  const Search = async () => {
    const cityInput = document.querySelector(".cityInput");
    if (cityInput.value.trim() === "") {
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    setWeatherData({
      humidity: data.main?.humidity + "%",
      windSpeed: data.wind?.speed + "km/h",
      temperature: data.main?.temp + "℃",
      location: data.name,
    });
  };

  return (
    <div className="Container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city..." />
        <div className="search-icon" onClick={Search}>
          <img src={search_icon} alt="icon" />
        </div>
      </div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="weather-temp">{weatherData.temperature}</div>
      <div className="weather-image">
        <img src={sunrise} alt="icon" />
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} alt="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy} alt="" />
          <div className="data">
            <div className="wind-rate">{weatherData.windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;


















































































// import React from "react";
// import "./WeatherApp.css";
// import search_icon from "../Assets/searchicon.png";
// // import cloudy from "../Assets/cloudy.png";
// // import rainy from "../Assets/rainy.png";
// // import drizzle from "../Assets/drizzle.png";
// import humidityicon from "../Assets/humidity.png";
// // import snowy from "../Assets/snowy.png";
// // import suny from "../Assets/suny.png";
// import sunrise from "../Assets/weathersunrise.png";
// import windy from "../Assets/wind.png";

// const WeatherApp = () => {
//   const apiKey = process.env.REACT_APP_API_KEY;

//   const Search = async () => {
//     const element = document.getElementsByClassName("cityInput");
//     if (element[0].value===" ") {
//       return 0;
//     }

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
//     let response = await fetch(apiUrl);
//     let data = response.json();
//     const humidity = document.getElementsByClassName("humidity-percent");
//     const wind = document.getElementsByClassName("wind-rate");
//     const temperature = document.getElementsByClassName("weather-images");
//     const location = document.getElementsByClassName("cityName");

//     humidity[0].innerHTML = data.main?.humidity + "%";
//     wind[0].innerHTML = data.wind?.speed + "km/h";
//     temperature[0].innerHTML = data.main?.temp + "℃";
//     location[0].innerHTML = data.name;
//   };
//   return (
//     <div className="Container">
//       <div className="top-bar">
//         <input type="text" className="cityInput" placeholder="Search city..." />
//         <div className="search-icon" onClick={()=>{Search()}}>
//           <img src={search_icon} alt="icon" />
//         </div>
//       </div>
//       <div className="weather-location">France</div>
//       <div className="weather-temp">24℃</div>
//       <div className="weather-image">
//         <img src={sunrise} alt="" />
//       </div>
//       <div className="data-container">
//         <div className="element">
//           <img src={humidityicon} alt="icon" />
//           <div className="data">
//             <div className="humidity-percent">78%</div>
//             <div className="text">Humidity</div>
//           </div>
//         </div>
//         <div className="element">
//           <img src={windy} alt="" />
//           <div className="data">
//             <div className="wind-rate">18km/h</div>
//             <div className="text">Wind Speed</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;
