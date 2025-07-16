import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🧘 Yoga Tracker</h1>
      <div>
        <a href="/">Home</a>
        <a href="/yoga">Pose Classification </a>
        <a href="/warrior_regressor">Pose Regression</a>
      </div>
    </nav>
  );
};

export default Navbar;
