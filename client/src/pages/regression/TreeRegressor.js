import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';
import Sidebar from '../../componants/Sidebar';
import RegressorLayout from '../../componants/RegressorLayout';

let video;
let poseNet;
let pose;
let skeleton;
let brain;
let prediction = 'Waiting...';

const TreeRegressor = () => {
  const [ml5Ready, setMl5Ready] = useState(false);

  useEffect(() => {
    const checkMl5 = () => {
      if (window.ml5) {
        console.log('ml5 is loaded');
        setMl5Ready(true);
      } else {
        console.log('Waiting for ml5...');
        setTimeout(checkMl5, 100);
      }
    };
    checkMl5();

    return () => {
      video = null;
      poseNet = null;
      pose = null;
      skeleton = null;
      brain = null;
      prediction = 'Waiting...';
    };
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(640, 480).parent(canvasParentRef);
    video = p5.createCapture(p5.VIDEO);
    video.size(640, 480);
    video.hide();

    const ml5 = window.ml5;

    poseNet = ml5.poseNet(video, () => {
      console.log('PoseNet loaded');
    });

    poseNet.on('pose', (results) => {
      if (results.length > 0) {
        pose = results[0].pose;
        skeleton = results[0].skeleton;
      }
    });

    const options = {
      inputs: 34,
      outputs: 1,
      task: 'regression',
      debug: true,
    };

    brain = ml5.neuralNetwork(options);
    const modelInfo = {
      model: 'model_tree/model.json',
      metadata: 'model_tree/model_meta.json',
      weights: 'model_tree/model.weights.bin',
    };

    brain.load(modelInfo, () => {
      console.log('Regression model loaded');
      predictPose();
    });
  };

  const predictPose = () => {
    if (pose) {
      const inputs = pose.keypoints.flatMap(kp => [kp.position.x, kp.position.y]);
      brain.predict(inputs, gotResult);
    } else {
      setTimeout(predictPose, 400);
    }
  };

  const gotResult = (error, results) => {
    if (error) {
      console.error(error);
    } else if (results && results[0]) {
      prediction = results[0].value.toFixed(2);
      console.log("Predicted Value:", prediction);
    }
    setTimeout(predictPose, 400); // Loop prediction
  };

  const draw = (p5) => {
    p5.background(255);

    p5.push();
    p5.translate(video.width, 0);
    p5.scale(-1, 1);
    p5.image(video, 0, 0, video.width, video.height);

    // if (pose) {
    //   skeleton.forEach(([a, b]) => {
    //     p5.stroke(0);
    //     p5.strokeWeight(2);
    //     p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
    //   });

    //   pose.keypoints.forEach(({ position }) => {
    //     p5.fill(0);
    //     p5.stroke(255);
    //     p5.ellipse(position.x, position.y, 16, 16);
    //   });
    // }

    p5.pop();

    // Show predicted value
    p5.fill(0, 102, 255);
    p5.noStroke();
    p5.textSize(24);
    p5.textAlign(p5.RIGHT, p5.TOP);
    p5.text(`Prediction: ${prediction}`, p5.width - 10, 10);
  };

  return (
    <div style={{ padding: '20px' }}>
      <RegressorLayout>
      {ml5Ready ? <Sketch setup={setup} draw={draw} /> : <h3>Loading ml5.js...</h3>}
      </RegressorLayout>
    </div>
  );
};

export default TreeRegressor;
