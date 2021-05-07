import React from 'react';
import './Cards.css';

import Card from './Card.jsx';


export default function Cards({ cities, onClose }) {
  if (cities.length < 1) {
    return (
      <div className="Intro-Container-M">
        <div className="Intro-Container">
          <h2>Bienvenido a <span>The Weather App</span>:</h2>
          <p>Ingrese una ciudad en el buscador y obtén sus datos meteorológicos.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cards'>
        {cities.map(c => <Card
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />)}
      </div>
    )
  }
}
