import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';


export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="bigBox">
      <div>
        <button id="button" onClick={onClose} className="btn btn-danger">X</button>
      </div>
      <div>
        <h5 className="card-title">{name}</h5>
      </div>
      <div id="details">
        <div className="temp">
          <p>Min</p> <p>{min}°</p>
        </div>
        <div className="temp">
          <p>Max</p> <p>{max}°</p>
        </div>
        <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="NO HAY IMAGEN" />
      </div>
      <div className="show-details">
        <button className="detail-btn"><Link to={`/city/${id}`}>Detalles</Link></button>
      </div>
    </div>
  );
};
