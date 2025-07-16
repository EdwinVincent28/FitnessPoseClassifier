import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-regression">
      <h3>Yoga Regressors</h3>
      <a href="/tree_regressor" className={({ isActive }) => isActive ? 'active' : ''}>
        Tree Pose
      </a>
      <a href="/warrior_regressor" className={({ isActive }) => isActive ? 'active' : ''}>
        Warrior Pose
      </a>
      <a href="/stretch_regressor" className={({ isActive }) => isActive ? 'active' : ''}>
        Stretch Pose
      </a>
    </div>
  );
};

export default Sidebar;
