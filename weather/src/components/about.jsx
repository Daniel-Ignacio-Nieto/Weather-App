import React from "react";
import "./about.css";


const About = () => {

    return (
        <div className="About-Container-M">
            <div className="About-Container">
                <h2 >Sobre <span>Weather App</span>:</h2>
                <p className="About-P">Esta Plataforma Web fué creada por <a href="https://github.com/Daniel-Ignacio-Nieto" target="_blank" rel="noreferrer" className="About-P-a">Ignacio Nieto</a> utilizando <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="About-P-a">React JS</a>.</p>
                <p className="About-P">El objetivo sería obtener datos Meteorológicos de las ciudades que desees, éstos datos son obtenidos gracias al uso de una API externa mediante el buscador de arriba. Una vez que ya tenemos esos datos los renderizamos en forma de tarjetas dinámicamente sobre la pantalla principal. Para lograr las distintas vistas de la página usamos el ruteo provisto por <a href="https://reactrouter.com/" target="_blank" rel="noreferrer" className="About-P-a">React Router</a>.</p>
                <p className="About-P">Para obtner más información sobre alguna ciudad, puedes pulsar el boton "Ver Detalles" que se encuentra en cada tarjeta.</p>
            </div>
        </div>
    );
};

export default About;