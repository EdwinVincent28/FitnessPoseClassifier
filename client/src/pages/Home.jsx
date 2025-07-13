import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {

  const {user} = useAuthContext()
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {!user && (
        <>
          <div className="top-right-buttons">
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <button onClick={() => navigate('/login')}>Login</button>
          </div>
          <div className="center-content">
            <h1>Welcome to FitTracker!</h1>
            <h2>Your AI-Powered Fitness Companion</h2>
          </div>

          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-lg-6">
                    <p><strong>Yoga Pose Classifier</strong>: Get real-time feedback on your yoga postures using AI.</p>
                    <img 
                      src="/assets/images/warrior_yoga_pose.jpg" 
                      alt="Yoga Pose" 
                      style={{ width: '90%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                    />
              </div>
              <div className="col-lg-6">
                    <p><strong>Live Exercise Counter</strong>: Count reps live with pose detection and form accuracy.</p>
                    <img 
                      src="/assets/images/pushup.jpg" 
                      alt="Pushups" 
                      style={{ width: '90%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                    />
              </div>
            </div>
          </div>
        </>
      )}

      {user && (
        <>
          <h1>{user.email}</h1>
          <h2>Welcome to FitTracker!</h2>
          <div className="button-group">
            <button onClick={() => navigate('/yoga')}>Yoga Pose Accuracy</button>
            <button onClick={() => navigate('/exercise')}>Live Exercise Counter</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
