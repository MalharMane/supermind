import React from 'react';
import './Sidebar.css'; // Styling for the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Notifications</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
