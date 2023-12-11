// HomePage.js
import React, { useState, useContext } from 'react';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import ContentFeed from "../components/ContentFeed";
import '../css/HomePage.css'; // Import the CSS file
import CategoryContext from '../contexts/CategoryContext';
import Footer from '../components/Footer';
import UploadButton from '../components/UploadButton';
import { AuthContext } from '../contexts/AuthContext';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { isSignedIn } = useContext(AuthContext); 

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <div className="home-page">
        <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Sidebar />
        {isSignedIn && <UploadButton />} 
        <ContentFeed searchTerm={searchTerm} selectedCategory={selectedCategory}/>
        <Footer />
      </div>
    </CategoryContext.Provider>
  );
};

export default HomePage;