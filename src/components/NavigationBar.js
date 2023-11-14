import React, { useState } from 'react';
import Sidebar from './Sidebar';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav style={{ width: '100%', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <button onClick={toggleSidebar} style={{ color: 'black' }}>Toggle Sidebar</button>
        <input type="search" placeholder="Search..." style={{ flex: 1, margin: '0 10px', width: '30%', position: 'absolute', left:'50%', transform: 'translateX(-50%)' }} />
        <h1 style={{ marginLeft: '20px',  position: 'absolute', left:'80%', transform: 'translateX(-50%)'  }}>This is a Navigation Bar</h1>
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default NavigationBar;