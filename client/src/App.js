import React from 'react';
import PoseClassifier from './PoseClassifier';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import YogaPose from './pages/YogaPose';
import ExerciseCounter from './pages/ExerciseCounter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pose" element={<PoseClassifier />} />
        <Route path="/yoga" element={<YogaPose/>} />
        <Route path="/exercise" element={<ExerciseCounter/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;