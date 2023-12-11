import supabase from '../components/supabaseClient'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProfilePage.css'; // Import the CSS file

function ProfilePage() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session && session.user) {
          setEmail(session.user.email);
        }
      }
    );
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="profile-picture" />
          <h1 className="user">{email}</h1>
        </div>
        <div className="profile-details">
          <p className="detail">Number of stories: 10</p>
          <p className="detail">Contributions: 5</p>
        </div>
        <Link to="/" className="home-button">Go Back Home</Link>
      </div>
    </div>
  );
}

export default ProfilePage;