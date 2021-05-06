import React from "react";


const About = () => {

    return (
        <div className="">
            <h2 className="">Sobre <span>Weather App</span>:</h2>
            <p className="">Esta Plataforma Web fue creada por <a href="https://github.com/Daniel-Ignacio-Nieto" target="_blank" rel="noreferrer" className="">Ignacio Nieto</a> utilizando <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="">React JS</a>.</p>
            <p className="">El objetivo sería obtener datos Meteorológicos de las ciudades que desees, estos datos son obtenidos gracias al uso de una API externa mediante el buscador de arriba. Una vez que ya tenemos esos datos los renderizamos en forma de tarjetas dinamicamente sobre la pantalla principal. Para lograr las distintas vistas de la pagina usamos el ruteo provisto por <a href="https://reactrouter.com/" target="_blank" rel="noreferrer" className="">React Router</a>.</p>
            <p className="">Para obtner mas informacion sobre alguna ciudad, puedes pulsar el boton "Ver Detalles" que se encuentra en cada tarjeta.</p>
        </div>
    );
};

export default About;