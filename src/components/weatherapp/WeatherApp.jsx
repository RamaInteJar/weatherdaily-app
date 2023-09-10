import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/searchicon.png'
import cloudy from '../Assets/cloudy.png'
import rainy from '../Assets/rainy.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import snowy from '../Assets/snowy.png'
import suny from '../Assets/suny.png'
import sunrise from '../Assets/weathersunrise.png'
import windy from '../Assets/wind.png'


const WeatherApp = () => {
  return (
    <div className='weatherContainer'>
        <div className='searchContainer'>
            <input type="text" className='cityInput' placeholder='Search city...'/>
            <div className='search-icon'>
                <img src={search_icon} alt="search" />
            </div>
        </div>
        <div className="weather-images">
        <div>24℃</div>
            <img src={cloudy} alt="" />
        </div>
        
    </div>
  )
}

export default WeatherApp