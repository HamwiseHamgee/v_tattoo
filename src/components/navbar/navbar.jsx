import React from 'react';
import './navbar.css';
import hamburger_icon from '../../assets/images/hamburger_icon.svg';

const Navbar = () => {
	// function dropdown() {
		// function showDropdown() {
		// 	document.getElementById('dropdownContent').classList.toggle('show');
		// }

		// window.onclick = function (event) {
		// 	if (!event.target.matches('#dropdownButton')) {
		// 		let dropdowns = document.getElementById('dropdownContent');
		// 		let i;
		// 		for (i = 0; i < dropdowns.length; i++) {
		// 			let openDropdown = dropdowns[i];
		// 			if (openDropdown.classList.contains('show')) {
		// 				openDropdown.classList.remove('show');
		// 			}
		// 		}
		// 	}
		// };

		

	// 	return (
			
	// 	);
	// }


	const handleScrollToElement = (e) => {
		alert(`${e.currentTarget.id} got clicked`);

		
	}

	return(
		<div className='drpdwn' id='drpdwnContainer'>
			<span>
				<button  id='drpdwnButton'>
					<img src={hamburger_icon} alt='Menu icon'></img>
				</button>
			</span>
			<nav id='navContent' className='show'>
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
						id='navGallery'
					>
						Booking
					</li>
					<li 
						onClick={handleScrollToElement} 
						className='navLink' 
						id='navLink'
					>
						Bio
					</li>
				</ol>
			</nav>
		</div>
	);
};

export default Navbar;
