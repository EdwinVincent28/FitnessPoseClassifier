import React from 'react';
import PoseClassifier from '../PoseClassifier';

const ExerciseCounter = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🏃 Live Exercise Counter</h2>
      {/* <p>Here you'll implement the live counter logic.</p> */}
      <p><PoseClassifier/></p>
    </div>
  );
};

export default ExerciseCounter;
