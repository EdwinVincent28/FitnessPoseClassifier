import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <h1>🧘 Yoga Tracker</h1>

      <div>
        <Link to="/">Home</Link>

        {user && (
          <>
            <Link to="/yoga">Pose Classification</Link>
            <Link to="/warrior_regressor">Pose Regression</Link>
            <span className="logout-btn" onClick={handleLogout}>
              Logout
            </span>
          </>
        )}

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
