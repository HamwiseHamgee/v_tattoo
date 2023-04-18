import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
	navElement() {
		return (
			<ul>
				<li>Gallery</li>
				<li>Booking</li>
				<li>Bio</li>
			</ul>
		);
	}

	dropdown() {
		return (
			<div>
				[Nav Button]
				{this.navElement()}
			</div>
		);
	}

	render() {
		return <>{this.dropdown()}</>;
	}
}

export default Navbar;
