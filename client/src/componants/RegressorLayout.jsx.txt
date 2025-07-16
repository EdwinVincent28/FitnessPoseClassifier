import React from 'react';
import './RegressorLayout.css';
import Sidebar from './Sidebar';

const RegressorLayout = ({ children }) => {
  return (
    <div className="regressor-layout">
      <Sidebar/>
      <div className="regressor-content">
        {children}
      </div>
    </div>
  );
};

export default RegressorLayout;
