import React from 'react';
import PoseClassifier from '../PoseClassifier';

const YogaPose = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🧘 Yoga Pose Accuracy Measure</h2>
      {/* <p>Here you'll add the pose detection system.</p> */}
      <p><PoseClassifier/></p>
    </div>
  );
};

export default YogaPose;
