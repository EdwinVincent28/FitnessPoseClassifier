import React, { useState } from 'react';
import PoseClassifier from '../PoseClassifier';
import './YogaPose.css';

const poses = {
  warrior: {
    label: 'warrior',
    image: '/assets/images/warrior.jpg',
  },
  tree: {
    label: 'tree',
    image: '/assets/images/tree.jpg',
  },
  stretch: {
    label: 'stretch',
    image: '/assets/images/stretch.jpeg',
  },
};

const YogaPose = () => {
  const [selectedPose, setSelectedPose] = useState('warrior');

  return (
    <div className="yoga-container">
      <div className="sidebar">
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
      </div>

      <div className="main-area">
        <div className="pose-classifier">
          <PoseClassifier expectedPose={selectedPose} />
        </div>
        <div className="pose-info">
          <img
            src={poses[selectedPose].image}
            alt={poses[selectedPose].label}
            className="pose-image"
          />
        </div>
        
      </div>
    </div>
  );
};

export default YogaPose;
