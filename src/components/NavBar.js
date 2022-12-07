import React from "react";
import logo from "../assets/logos/Logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-links">
                <li><NavLink to="/" exact={true} >Home</NavLink></li>
                <li><NavLink to="/share">Share</NavLink></li>
                <li><NavLink to="/discover">Discover</NavLink></li>
            </ul>
        </nav>
    )
};

export default NavBar;