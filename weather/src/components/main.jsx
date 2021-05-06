import React from "react";
import { Route } from "react-router-dom";
import About from "./about";
import Cards from "./Cards";
import Credits from "./Creditos";
import DetailCity from "./detail-city";



const Main = ({ cities, onClose }) => {

    return (
        <div className="">
            <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/credits" component={Credits} />
            <Route path="/city/:id" render={({ match }) => <DetailCity cities={cities} match={match} />} />
        </div>
    )
}

export default Main;