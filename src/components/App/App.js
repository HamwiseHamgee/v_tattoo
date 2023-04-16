import React from 'react';
import './App.css';
import Bio from '../bio/bio';
import Booking from '../booking/booking';
import Gallery from '../gallery/gallery';
import Navbar from '../navbar/navbar';
import Splashpage from '../splashpage/splashpage';

class App extends React.Component {
  render() {
    return(
      <div id='app'>
        <head id='appHead'>
        <Navbar/>
        </head>
        <body id='appBody'>
          <Splashpage/>
          <Gallery/>
          <Booking/>
          <Bio/>
        </body>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>WEBSITE FINISHED</h1>
//         <h2>MISSION ACCOMPLISHED</h2>
//         <h2>GOOD JOB, EVERYONE</h2>
//       </header>
//     </div>
//   );
// }

export default App;
