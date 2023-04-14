import React from "react";
import './booking.css';

class Booking extends React.Component {
    render() {
        return(
            <div id='bookingDiv'>
                <h2 id='bookingTitle'>Booking</h2>
                <p>V is available at MLN Monday-Friday by appointment only  from 12pm-8pm.</p>
                <p>If you would like to contact V through email for inquiries regarding a tattoo:</p>
                <p>vfoxx.booking@gmail.com</p>
            </div>
        );
    }
};

export default Booking;