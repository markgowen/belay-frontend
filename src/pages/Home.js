import React from 'react';
import solo from "../assets/images/solo.jpg";
import logo from "../assets/logos/Logo.png";
import Button from '@mui/material/Button';

function Home() {
    return (
        <>
            <div className='hero'>
                <h1>Plan Your Next Climbing Adventure</h1>
            </div>
            <div className='secondary-hero'>
                <h2>Discover</h2>
                <h2>Plan</h2>
                <h2>Share</h2>
            </div>
            <div className=''>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
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
                        <Button sx={{ backgroundColor: "#FF8A00" }} variant="contained" type="submit" >Discover</Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;