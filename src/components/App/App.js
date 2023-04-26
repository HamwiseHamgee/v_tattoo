import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bio from '../bio/bio';
import Booking from '../booking/booking';
import Gallery from '../gallery/gallery';
import Navbar from '../navbar/navbar';
import Splashpage from '../splashpage/splashpage';



function App() {
	return (
		<Routes>
			<Route path='/' element={ <Navbar/> }/>
			<Route path='/' element={ <Splashpage/> }/>
		</Routes>
		// <div id='app'>
		// 	<header id='appHead'>
		// 		<Navbar />
		// 	</header>
		// 	<body id='appBody'>
		// 		<div className='pageContainer'>
		// 			<Splashpage />
		// 		</div>
		// 		<div className='pageContainer'>
		// 			<Gallery />
		// 		</div>
		// 		<div className='pageContainer'>
		// 			<Booking />
		// 		</div>
		// 		<div className='pageContainer'>
		// 			<Bio />
		// 		</div>
		// 	</body>
		// </div>
	);
};


export default App;
