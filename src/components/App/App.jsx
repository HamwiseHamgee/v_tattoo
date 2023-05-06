import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllComponents from '../allComponents/allComponents';
import NotFound from '../notFound/notFound';
// import Navbar from '../navbar/navbar';
// import Splashpage from '../splashpage/splashpage';
// import Gallery from '../gallery/gallery';
// import Booking from '../booking/booking';
// import Bio from '../bio/bio';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<AllComponents />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<footer>
					Icons by <a href='icons8.com'>Icons8</a>.
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
