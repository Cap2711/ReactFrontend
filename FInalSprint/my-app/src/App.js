import React from 'react';
import './index.css';

function App() {
  return (
    <div className="outer-box">
      <div className="inner-box">
        <div className="logo">
          <h1>
            Naomi & Chels Air
          </h1>
          <p>Your Gateway to Seamless Air Travel</p>
        </div>


        <nav className="navbar">
          <h3><a href='#' target='_blank'>Home</a></h3>
          <h3><a href='#' target='_blank'>Bookings</a></h3>
          <h3><a href='#' target='_blank'>Airports</a></h3>
          <h3><a href='#' target='_blank'>About Us</a></h3>
          <h3><a href='#' target='_blank'>Contact</a></h3>
        </nav>

        
        <div className="welcome">
          <h1>Welcome, lets find your booking!</h1>
          <p>Your one-stop solution for managing air travel data!</p>
        </div>

        
        <div className="search-section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>

       
        <footer className="footer">
          <p>&copy; 2024 Air Travel Co. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
