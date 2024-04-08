import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import WeatherCard from "./assets/components/WeatherCard.jsx"
import listBg from "../src/assets/json/listBg.json"
import Cargando from './assets/components/Cargando.jsx'



function App() {
  /*Use States*/
  const bg = "clear sky"
  const [cords, setCords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const[background, setBackground] = useState(listBg[bg]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCarga, setErrorCarga] = useState(false);
  /*varianbles*/
  const apiKey = "d3f37c058276e4e1ef95cfb37f96d282"

/*Funciones*/
  const success = (pos) => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCords(obj);
  }
  const errorUbicacion = () => { 
    setErrorCarga(true);
      setIsLoading(false);
  }


  /*useEffects*/
      /*Acceso ubicacion*/
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, errorUbicacion);
  },[])


    /*Call a la api*/
  useEffect(() => {
    if (cords) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=${apiKey}`;
    axios.get(url)
    .then(res => {
      const cel = ((res.data.main.temp)- 273.15).toFixed(2);
      const far = (cel * 9/5 +32).toFixed(2);
      setBackground([res.data.weather[0].icon])

      setTemp({cel, far});
      (setWeather(res.data))
    })
    .catch(err => {
      setErrorCarga(true);
      setIsLoading(false);
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      
    })
    }
  },[cords])
  console.log(weather)
  console.log(temp)
  console.log("error " + errorCarga)
  console.log("loading" + isLoading)

  return (
    <>
    {
      isLoading?
      <div className="App">
        <Cargando></Cargando>
      </div>

      :
        <WeatherCard
          weather={weather}
          temp={temp}
          background={background}
          errorCarga={errorCarga}

      ></WeatherCard>

      
    }
    
    </>
    
  )
}

export default App
