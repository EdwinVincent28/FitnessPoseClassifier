import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';

let video;
let poseNet;
let pose;
let skeleton;
let brain;
let poseLabel = 'Y';

const PoseClassifier = () => {
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
  }, []);

  const setup = (p5, canvasParentRef) => {
    console.log('p5 setup');
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
      outputs: 4,
      task: 'classification',
      debug: true,
    };

    brain = ml5.neuralNetwork(options);

    const modelInfo = {
      model: 'model2/model.json',
      metadata: 'model2/model_meta.json',
      weights: 'model2/model.weights.bin',
    };

    brain.load(modelInfo, () => {
      console.log('Pose classification model loaded');
      classifyPose();
    });
  };

  const classifyPose = () => {
    if (pose) {
      const inputs = [];
      for (let i = 0; i < pose.keypoints.length; i++) {
        inputs.push(pose.keypoints[i].position.x);
        inputs.push(pose.keypoints[i].position.y);
      }
      brain.classify(inputs, gotResult);
    } else {
      setTimeout(classifyPose, 100);
    }
  };

  const gotResult = (error, results) => {
    if (results && results[0].confidence > 0.90) {
      poseLabel = results[0].label.toUpperCase();
      // Write our logic here
      console.log("Pose classified correctly:", poseLabel);
    }
    classifyPose(); // Loop for live classification
  };

  const draw = (p5) => {
    p5.background(255);

    p5.push();
    p5.translate(video.width, 0);
    p5.scale(-1, 1);
    p5.image(video, 0, 0, video.width, video.height);

    if (pose) {
      skeleton.forEach(([a, b]) => {
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.line(a.position.x, a.position.y, b.position.x, b.position.y);
      });

      pose.keypoints.forEach(({ position }) => {
        p5.fill(0);
        p5.stroke(255);
        p5.ellipse(position.x, position.y, 16, 16);
      });
    }

    p5.pop();

    p5.fill(255, 0, 255);
    p5.noStroke();
    p5.textSize(64);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(poseLabel, p5.width / 2, p5.height / 2);
  };

  return (
    <div style={{ padding: '20px' }}>
      {ml5Ready ? <Sketch setup={setup} draw={draw} /> : <h3>Loading ml5.js...</h3>}
    </div>
  );
};

export default PoseClassifier;
