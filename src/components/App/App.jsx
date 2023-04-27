import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllComponents from '../allComponents/allComponents';
// import Navbar from '../navbar/navbar';
// import Splashpage from '../splashpage/splashpage';
// import Gallery from '../gallery/gallery';
// import Booking from '../booking/booking';
// import Bio from '../bio/bio';

function App() {
	return (

		
	<BrowserRouter >
        {/* <header>
            <Routes>
                <Route path='/' element={<Navbar />} />
            </Routes>
        </header> */}
		<div className='App'>
			<Routes>
				
				<Route path='/' element={<AllComponents />} />
			</Routes>
		</div>
	</BrowserRouter>

	);
}

export default App;
