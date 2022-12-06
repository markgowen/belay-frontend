import React, { useState, useEffect } from 'react';
import ClimbList from "../components/ClimbList"

function Discover() {
    const [climbs, setClimbs] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/climbs")
        .then((response) => response.json())
        .then(climbs => setClimbs(climbs))
    }, []);

    return (
        <div>
            <ClimbList climbs={climbs} />
        </div>
    );
}

export default Discover;