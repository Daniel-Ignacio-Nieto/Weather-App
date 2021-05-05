import React from "react";


const DetailCity = ({ cities, match }) => {

    let city = cities.filter((c) => c.id === matchID)

    return (
        <div className="">
            <h2 className="">{city.name}</h2>
        </div>
    );
};

export default DetailCity;