import React from 'react';
import PoseClassifier from './PoseClassifier';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import YogaPose from './pages/YogaPose';
import ExerciseCounter from './pages/ExerciseCounter';
import Navbar from './componants/Navbar';
import TreeRegressor from './pages/regression/TreeRegressor';
import WarriorRegressor from './pages/regression/WarriorRegressor';
import StretchRegressor from './pages/regression/StretchRegressor';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pose" element={<PoseClassifier />} />
        <Route path="/yoga" element={<YogaPose/>} />
        <Route path="/exercise" element={<ExerciseCounter/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tree_regressor" element={<TreeRegressor />} />
        <Route path="/warrior_regressor" element={<WarriorRegressor />} />
        <Route path="/stretch_regressor" element={<StretchRegressor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;