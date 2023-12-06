import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import Sidebar from './Sidebar';
import '../css/NavigationBar.css';
import HamburgerMenu from 'react-hamburger-menu';

function NavigationBar({ searchTerm, setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <nav style={{ width: '100%', backgroundColor: '', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ cursor: 'pointer' }}>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={toggleSidebar}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.2}
        />
      </div>
        
        <input className="search-bar" type="search" placeholder="Search Stories..." value={searchTerm} onChange={handleSearch}/>

        <button className="signin-button" onClick={() => window.location.href='/signin'}>
          Sign In
        </button>

// ...
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default NavigationBar;