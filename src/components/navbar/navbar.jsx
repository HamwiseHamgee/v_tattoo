import React, { useState } from 'react';
import './navbar.css';
import hamburger_icon from '../../assets/images/hamburger_icon.svg';
import instagram from '../../assets/images/instagram.svg';

const Navbar = () => {

	const [showNav, setShowNav] = useState(false);
	const navClick = () => {
		if (!showNav) {
			setShowNav(true)
		} else {
			setShowNav(false)
		};
		
	};

	return (
		<div className='drpdwn' id='drpdwnContainer'>
			<span>
				<button onClick={navClick} id='drpdwnButton'>
					<img src={hamburger_icon} alt='Menu icon'></img>
				</button>
			</span>
			{showNav ? <NavContent /> : null}
		</div>
	);
};

const NavContent = () => {

	const handleScrollToElement = (e) => {
		alert(`${e.currentTarget.id} got clicked`);
	};

	return (
	<nav id='navContent'>
		<ol>
			<li
				onClick={handleScrollToElement}
				className='navLink'
				id='navGallery'
			>
				Gallery
			</li>
			<li
				onClick={handleScrollToElement}
				className='navLink'
				id='navBooking'
			>
				Booking
			</li>
			<li 
				onClick={handleScrollToElement} 
				className='navLink' 
				id='navBio'
			>
				Bio
			</li>
			<li className='navLink' id='navInsta'>
				<a href='https://www.instagram.com/v.ffoxx/'>
				<img src={instagram} alt='Instagram Icon' id='instaIcon'></img>
				</a>
			</li>
			{/* <li className='navLink' id='navFacebook'>
				<a href='https://www.facebook.com/mylittleneedletattoos'>
				<img src={facebook_icon} alt='Facebook Icon'></img>
				</a>
			</li> */}
		</ol>
	</nav>
	);
};

export default Navbar;
