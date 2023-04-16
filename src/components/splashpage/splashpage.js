import React from 'react';
import './splashpage.css';
import splashDecoration from '../../assets/images/splashpageBackground.png';

class Splashpage extends React.Component {
	render() {
		return (
			<div id='splashpage'>
				<img src={splashDecoration} 
					id='splashDecoration'
					alt='Decorative line art'></img>
				<h1>V FOX</h1>
				<h2>Tattoo Artist</h2>
			</div>
		);
	}
}

export default Splashpage;
