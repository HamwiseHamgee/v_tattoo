import React from 'react';
import './bio.css';
import headshot from '../../assets/images/vHeadshot.png';

const Bio = () => {
		return (
			<div id='bio'>
				<h1>V Fox</h1>
				<h2>They/Them</h2>
				<p>
					V has been tattooing in the Detroit region since 2015. They
					work in black ink only, and specialize in fine line, detail
					work. They have a preference for skulls, animals, small
					floral, geometric and patterned works. In their free time
					they enjoy their cats, hanging with their partner and
					nature.
					<p>
						Be sure to like and follow My Little Needle’s&nbsp;
						<a href='https://www.facebook.com/mylittleneedletattoos'>
							Facebook
						</a>
						&nbsp;and&nbsp;
						<a href='https://www.instagram.com/mylittleneedletattoos/'>
							Instagram
						</a>
						&nbsp;to get shop updates!
					</p>
					<p>
						You can also follow V on their personal&nbsp;
						<a href='https://www.instagram.com/v.ffoxx/'>
							Instagram
						</a>
						.
					</p>
				</p>
				<img src={headshot} alt='Headshot of V Fox'/>
			</div>
		);
}

export default Bio;
