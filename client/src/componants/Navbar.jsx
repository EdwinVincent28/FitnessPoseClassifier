import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🏋️‍♂️ FitTracker</h1>
      <div>
        <a href="/">Home</a>
        <a href="/yoga">Yoga Pose</a>
        <a href="/exercise">Exercise Counter</a>
      </div>
    </nav>
  );
};

export default Navbar;
