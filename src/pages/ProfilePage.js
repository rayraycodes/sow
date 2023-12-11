import '../css/ProfilePage.css'; // Import the CSS file
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import supabase from '../components/supabaseClient';
import ContentFeed from "../components/ContentFeed";
import { Link } from 'react-router-dom';

function ProfilePage() {
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [stories, setStories] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session && session.user) {
          setEmail(session.user.email);
        }
      }
    );

    const fetchStories = async () => {
      const { data: stories, error } = await supabase
        .from('story_details')
        .select('*')
        .eq('uuid', userId);
      if (error) console.log('Error fetching stories: ', error);
      else setStories(stories);
    };

    fetchStories();
  }, [userId]);

  return (
    <div className="profile-page">
      <Link to="/" className="home-button">Go Back Home</Link>
      <div className="profile-card">
        <div className="profile-header">
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile" className="profile-picture" />
          <h1 className="user">{email}</h1>
        </div>
        <p>Your Stories</p>
        <div className="profile-details">
          <ContentFeed searchTerm={searchTerm} selectedCategory={selectedCategory} userId={userId}/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;