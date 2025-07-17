import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Home = () => {

  const {user} = useAuthContext()
  const navigate = useNavigate();
  const {logout} = useLogout()

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

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
                    <p><strong>Yoga Pose Regressor</strong>: Get the accuracy of the yoga pose you are performing</p>
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
          <div className="top-right-buttons">
            <button onClick={handleLogout}>Logout</button>
          </div>
          <h1>{user.email}</h1>
          <h2>Welcome to FitTracker!</h2>

          <div className="image-button-group">
            <div className="image-option" onClick={() => navigate('/yoga')}>
              <img
                src="/assets/images/warrior_yoga_pose.jpg"
                alt="Yoga Pose Accuracy"
                className="feature-image"
              />
              <p>Yoga Pose Classification</p>
            </div>

            <div className="image-option" onClick={() => navigate('/warrior_regressor')}>
              <img
                src="/assets/images/stretch.jpeg"
                alt="Live Exercise Counter"
                className="feature-image"
              />
              <p>Yoga Pose Regression</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
