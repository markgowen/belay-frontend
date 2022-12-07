import React from "react";
import logo from "../assets/logos/Logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-links">
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/share">
                    <li>Share</li>
                </NavLink>
                <NavLink to="/discover">
                    <li>Discover</li>
                </NavLink>
            </ul>
        </nav>
    )
};

export default NavBar;