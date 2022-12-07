import React from "react";
import logo from "../assets/logos/Logo.png"

function NavBar() {
    return (
        <nav className="NavBar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-links">
                <li>Home</li>
                <li>Share</li>
                <li>Discover</li>
            </ul>
        </nav>
    )
};

export default NavBar;