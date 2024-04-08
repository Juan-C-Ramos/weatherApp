import React from 'react'
import { useEffect, useState } from 'react'
import ErrorCarga from './ErrorCarga.jsx'
import "./WeatherCard.css"

const WeatherCard = ({weather, temp, background, errorCarga}) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const bgStyle = {
    backgroundImage: `url(../backgrounds/${background}.jpg)`
  };

  const handleTemp = () => {
    setIsCelsius(!isCelsius);
  }

  return (
    <>
    {
      errorCarga?
      <ErrorCarga />
      :
      <div style={bgStyle} className='app'> 
        <div className='weatherCard'>
        <h1 className='cardTittle'>Weather</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <figure>
          <img className='icono' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt={weather?.weather[0].description} />
          <span className='nameIcon'>"{weather?.weather[0].description}"</span>
        </figure>
        <ul>
          <li><span>Velocidad del viento: </span> <span>{weather?.wind.speed} m/s</span></li>
          <li><span>Nubes: </span> <span>{weather?.clouds.all}%</span></li>
          <li><span>Presion: </span> <span>{weather?.main.pressure} hPa</span></li>
        </ul>
        <h3>
          {
            isCelsius?
            temp?.cel + " °C"
            :
            temp?.far + " °F"
          }
        </h3>
        <button className='buttonTemp' onClick={handleTemp}>Cambiar a {isCelsius? "°F" : "°C"}</button>
      </div>

      </div>

    }
    
    
    
    
    
    
    </>



    
  )
}

export default WeatherCard
