import React from 'react';
import './navbar.css';

const Navbar = () => {
	function dropdown() {
		function showDropdown() {
			document.getElementById('dropdownContent').classList.toggle('show');
		}

		window.onclick = function (event) {
			if (!event.target.matches('#dropdownButton')) {
				let dropdowns = document.getElementById('dropdownContent');
				let i;
				for (i = 0; i < dropdowns.length; i++) {
					let openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		};

		return (
			<div className='dropdown' id='dropdownContainer'>
				<button onClick={showDropdown()} id='dropdownButton'>
					Make this a hamburger icon
				</button>
				<div id='dropdownContent' className='show'>
					<a href='#' className='dropdownLink' id='drpdwnGallery'>
						Gallery
					</a>
					<a href='#' className='dropdownLink' id='drpdwnBooking'>
						Booking
					</a>
					<a href='#' className='dropdownLink' id='drpdwnBio'>
						Bio
					</a>
				</div>
			</div>
		);
	}

	return <>{dropdown()}</>;
};

export default Navbar;
