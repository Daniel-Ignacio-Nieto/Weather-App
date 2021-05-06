import React from "react";
import { Redirect, Link } from "react-router-dom";


const DetailCity = ({ cities, match }) => {

    let matchID = Number(match.params.id)
    const [city] = cities.filter((c) => c.id === matchID)

    if (!city) return <Redirect to="/" />
    return (
        <div className="">
            <h2 className="">{city.name}</h2>
            <div className="">
                <h4 className="">Temperatura: {city.temp}°C</h4>
                <h4 className="">Clima: {city.weather}</h4>
                <h4 className="">Viento: {city.wind} km/h</h4>
                <h4 className="">Nubosidad: {city.clouds}%</h4>
                <h4 className="">Latitud: {city.latitud}°</h4>
                <h4 className="">Longitud: {city.longitud}°</h4>
            </div>
            <button><Link to="/">Volver</Link></button>
        </div>
    );
};

export default DetailCity;