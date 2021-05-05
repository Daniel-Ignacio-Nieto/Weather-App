import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';


  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso, "soy la api")
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          var cityFound = cities.find((elem) => elem.id === ciudad.id)
          if (cityFound) {
            alert("La ciudad ya está agregada")
          } else {
            setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route path="/" render={() => <Cards onClose={onClose} cities={cities} />} />

    </div>
  );
}

export default App;