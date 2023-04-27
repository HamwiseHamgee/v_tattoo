import React from 'react';
import Bio from '../bio/bio';
import Booking from '../booking/booking';
import Gallery from '../gallery/gallery';
import Navbar from '../navbar/navbar';
import Splashpage from '../splashpage/splashpage';
import './allComponents.css';

function AllComponents() {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <body id='appBody'>
                <div className='pageContainer'>
                    <Splashpage />
                </div>
                <div className='pageContainer' id='galleryContainer'>
                    <Gallery />
                </div>
                <div className='pageContainer'>
                    <Booking />
                </div>
                <div className='pageContainer'>
                    <Bio />
                </div>
            </body>
        </>
    );
    
};

export default AllComponents;