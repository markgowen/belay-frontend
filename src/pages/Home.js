import React from 'react';
import solo from "../assets/images/solo.jpg";
import logo from "../assets/logos/Logo.png";
import Button from '@mui/material/Button';
import blackSquare from "../assets/logos/blackSquare.png";
import orangSquare from "../assets/logos/OrangeSquare.png";
import greenSquare from "../assets/logos/greenSquare.png";
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className='hero'>
                <h1>Plan Your Next Climbing Adventure</h1>
            </div>
            <div className='columns'>
                <div className='hero-column'> 
                    <img src={blackSquare} alt={blackSquare} />
                    <h2>Discover</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/discover"><Button sx={{"&:hover":{backgroundColor:"#E6E6E6"}, backgroundColor:"#000" }} variant="contained" type="submit" >Discover</Button></Link>
                </div>
                <div className='hero-column'> 
                    <img src={orangSquare} alt={blackSquare} />
                    <h2>Plan</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/discover"><Button sx={{"&:hover":{backgroundColor: "#E6E6E6"},backgroundColor: "#FF8A00" }} variant="contained" type="submit" >Discover</Button></Link>
                </div>
                <div className='hero-column'> 
                    <img src={greenSquare} alt={blackSquare} />
                    <h2>Share</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/share"><Button sx={{ "&:hover":{backgroundColor: "#E6E6E6"}, backgroundColor: "#2F642A" }} variant="contained" type="submit" >Share</Button></Link>
                </div>
            </div>
            <div className='middle-section'>
                <div className='middle'>
                    <img src={solo} alt='climber' />
                </div>
                <div className='bottom'>
                    <div className='bottom-logo'>
                        <img src={logo} alt='belay logo' />
                    </div>
                    <div className='bottom-section'>
                        <h3>Climb More</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to="/discover"><Button sx={{"&:hover":{backgroundColor: "#E6E6E6"}, backgroundColor: "#FF8A00" }} variant="contained" type="submit" >Discover</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;