import React from 'react';
import ClimbCard from "./ClimbCard";


function ClimbList({ climbs }) {
    const climbList = climbs.map((climb) => (
        <ClimbCard
            key={climb.id}
            name={climb.name}
            rating={climb.rating}
            location={climb.location}
            difficulty={climb.difficulty}
            image={climb.image}
            description={climb.description}
            climb={climb}
             />
    ))
    return (
        <div>
            {climbList}
        </div>
    )
}

export default ClimbList;