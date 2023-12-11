import React, { useState, useContext } from 'react';
import Sidebar from './Sidebar';
import '../css/NavigationBar.css';
import HamburgerMenu from 'react-hamburger-menu';
import { AuthContext } from '../contexts/AuthContext'; 
import supabase from '../components/supabaseClient'; 

import { Link } from 'react-router-dom';


function NavigationBar({ searchTerm, setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("Sign Out Error: ", error);
    else setIsSignedIn(false);
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
        {isSignedIn ? (
          <>
           <Link to="/profile" className="profile-button">Profile</Link>
           <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
          </>
        ) : (
          <button className="signin-button" onClick={() => window.location.href='/signin'}>
            Sign In
          </button>
        )}


      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default NavigationBar;