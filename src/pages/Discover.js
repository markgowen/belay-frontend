import React, { useState, useEffect } from 'react';
import ClimbList from "../components/ClimbList";
import Search from "../components/Search"

function Discover() {
    const [climbs, setClimbs] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001/climbs")
        .then((response) => response.json())
        .then(climbs => setClimbs(climbs))
    }, []);

    const filteredClimbs = climbs.filter((climb) => {
        return climb.name.toLowerCase().includes(query.toLowerCase())
    })

    return (
            <div className='discover'>
                
                <Search query={query} setQuery={setQuery} />
                <ClimbList climbs={filteredClimbs} />
            </div>
        
    );
}

export default Discover;