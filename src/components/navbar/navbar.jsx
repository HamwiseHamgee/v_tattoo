import React, { useState } from 'react';
import './navbar.css';
import hamburger_icon from '../../assets/images/hamburger_icon.svg';
import instagram_icon from '../../assets/images/instagram_icon.svg';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	const navClick = () => {
		if (!showNav) {
			setShowNav(true);
		} else {
			setShowNav(false);
		}
	};

	const navScroll = (e) => {
		const clickedName = e.currentTarget.id;

		let targetName = '';

		if (clickedName === 'navSplashpage') {
			targetName = 'splashpageContainer';
		} else if (clickedName === 'navGallery') {
			targetName = 'galleryContainer';
		} else if (clickedName === 'navBooking') {
			targetName = 'bookingContainer';
		} else if (clickedName === 'navBio') {
			targetName = 'bioContainer';
		}

		document
			.getElementById(targetName)
			.scrollIntoView({ behavior: 'smooth' });

		navClick();
	};

	const NavContent = () => {
		return (
			<nav id='navContent'>
				<ol>
					<li
						onClick={navScroll}
						className='navLink'
						id='navSplashpage'
					>
						Home
					</li>
					<li onClick={navScroll} className='navLink' id='navGallery'>
						Gallery
					</li>
					<li onClick={navScroll} className='navLink' id='navBooking'>
						Booking
					</li>
					<li onClick={navScroll} className='navLink' id='navBio'>
						Bio
					</li>
					<li className='navLink' id='navInsta'>
						<a href='https://www.instagram.com/v.ffoxx/'>
							<img
								src={instagram_icon}
								alt='Instagram Icon'
								id='instaIcon'
							></img>
						</a>
					</li>
				</ol>
			</nav>
		);
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

export default Navbar;
