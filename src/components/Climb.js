import React from "react";

function Climb({ 
    name, 
    rating, 
    location, 
    difficulty, 
    elevation, 
    type, 
    pitches,
    image,
    description
    }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{rating}</p>
            <p>{location}</p>
            <p>{difficulty}</p>
            <p>{elevation}</p>
            <p>{type}</p>
            <p>{pitches}</p>
            <p>{description}</p>
        </div>
    )
};

export default Climb;