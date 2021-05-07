import React from "react";
import "./Credits.css";


const Credits = () => {

    return (
        <div className="Credits-Container-M">
            <div className="Credits-Container">
                <h2>Créditos:</h2>
                <p className="Credits-P">La página esta hecha gracias a la API del clima perteneciente a <a href="https://openweathermap.org/" target="_blank" rel="noreferrer" className="Credits-P-a">
                    Open Weather Map</a></p>
                <p className="Credits-P">La imagen de fondo la obtuve de <a href="https://fondosmil.com/" target="_blank" rel="noreferrer" className="Credits-P-a">Fondos Mil</a></p>
            </div>
        </div>
    );
};

export default Credits;