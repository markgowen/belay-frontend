import React from 'react';
import searchIcon from "../assets/logos/search-icon.png";


function Search({ query, setQuery }) {
    return (
        <div className="search-container">
            <h3 className="search">Search</h3>
            <input 
                type="text"
                className='search-input'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <img src={searchIcon} alt="search icon" className="search-icon"></img>
        </div>
    );
}

export default Search;