import React, { useState } from 'react';
import PoseClassifier from '../PoseClassifier';
import './YogaPose.css';

const poses = {
  warrior: {
    label: 'Warrior',
    image: '/assets/images/warrior.jpg',
  },
  tree: {
    label: 'Tree',
    image: '/assets/images/tree.jpg',
  },
  stretch: {
    label: 'Stretch',
    image: '/assets/images/stretch.jpeg',
  },
};

const YogaPose = () => {
  const [selectedPose, setSelectedPose] = useState('warrior');

  return (
    <div className="yoga-container">
      {/* <div className="sidebar">
        <h3>Choose Pose</h3>
        {Object.keys(poses).map((pose) => (
          <button
            key={pose}
            className={pose === selectedPose ? 'active' : ''}
            onClick={() => setSelectedPose(pose)}
          >
            {poses[pose].label}
          </button>
        ))}
      </div> */}

      <div className="main-area">
        <div className="pose-classifier">
          <PoseClassifier expectedPose={selectedPose} />
        </div>
        <div className="pose-gallery">
          {Object.entries(poses).map(([key, pose]) => (
            <div key={key} className="pose-card">
              <img src={pose.image} alt={pose.label} />
              <p>{pose.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaPose;
