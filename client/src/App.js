import React from 'react';
import PoseClassifier from './PoseClassifier';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pose" element={<PoseClassifier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;