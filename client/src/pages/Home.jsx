import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Welcome to FitTracker!</h2>
      <div className="button-group">
        <button onClick={() => navigate('/yoga')}>Yoga Pose Accuracy</button>
        <button onClick={() => navigate('/exercise')}>Live Exercise Counter</button>
      </div>
    </div>
  );
};

export default Home;
