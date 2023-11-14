import React from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div style={{ 
      width: isOpen ? '200px' : '0', 
      height: '100vh', 
      position: 'fixed', 
      zIndex: 1, 
      top: 0, 
      left: 0, 
      backgroundColor: '#111', 
      overflowX: 'hidden', 
      transition: '0.5s',
      padding: '60px 0'
    }}>
      <h1 style={{color: 'white', paddingLeft: '20px'}}>This is a Sidebar</h1>
      <button onClick={toggleSidebar} style={{position: 'absolute', top: '20px', right: '20px'}}>Close</button>
    </div>
  );
}

export default Sidebar;