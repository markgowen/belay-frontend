import React from "react";

function NavBar() {
    return (
        <nav className="NavBar">
            <img src="/assets/logos/Logo.png" alt="logo" />
            <ul className="nav-links">
                <li>Home</li>
                <li>Share</li>
                <li>Discover</li>
            </ul>
        </nav>
    )
};

export default NavBar;