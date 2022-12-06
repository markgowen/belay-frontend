import React from 'react';
import Climb from "./Climb";

function ClimbList({ climbs }) {
    const climbList = climbs.map((climb) => (
        <Climb
            name={climb.name}
            rating={climb.rating}
            location={climb.location}
            difficulty={climb.difficulty}
            elevation={climb.elevation}
            type={climb.type}
            pitches={climb.pitches}
            image={climb.image}
            description={climb.description} />
    ))
    return (
        <div>
            {climbList}
        </div>
    )
}

export default ClimbList;