import React from "react";
import logo from "../assets/logos/Logo.png";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

function NavBar() {
    return (
        <nav className="NavBar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-links">
                <li><NavLink to="/" exact={true} >Home</NavLink></li>
                <li><NavLink to="/discover">Discover</NavLink></li>
                <NavLink to="/share"><Button sx={{ backgroundColor: "#FF8A00" }} variant="contained" type="submit" >Share</Button></NavLink>
            </ul>
        </nav>
    )
};

export default NavBar;