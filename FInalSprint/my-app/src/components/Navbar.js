import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AirTravel Co.</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/entities?type=aircraft">Aircraft</a></li>
        <li><a href="/entities?type=airport">Airport</a></li>
        <li><a href="/entities?type=passenger">Passenger</a></li>
        <li><a href="/entities?type=city">City</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
