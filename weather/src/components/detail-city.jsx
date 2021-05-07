import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./detail-city.css";


const DetailCity = ({ cities, match }) => {

    let matchID = Number(match.params.id)
    const [city] = cities.filter((c) => c.id === matchID)

    if (!city) return <Redirect to="/" />
    return (
        <div className="Detail-C-Container">
            <h2 className="">{city.name}</h2>
            <div className="Detail-C-Qualities">
                <h4>Temperatura: {city.temp}°C</h4>
                <h4>Clima: {city.weather}</h4>
                <h4>Viento: {city.wind} km/h</h4>
                <h4>Nubosidad: {city.clouds}%</h4>
                <h4>Latitud: {city.latitud}°</h4>
                <h4>Longitud: {city.longitud}°</h4>
            </div>
            <Link to="/">
                <button id="Detail-C-Btn">Volver</button>
            </Link>
        </div>
    );
};

export default DetailCity;